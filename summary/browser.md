# 浏览器架构
用户界面
主进程
内核
  渲染引擎
  JS 引擎
    执行栈
  事件触发线程
    消息队列
      微任务
      宏任务
  网络异步线程
  定时器线程

# 浏览器下事件循环(Event Loop)
事件循环是指: 执行一个宏任务，然后执行清空微任务列表，循环再执行宏任务，再清微任务列表

微任务 microtask(jobs): promise / ajax / Object.observe(该方法已废弃)
宏任务 macrotask(task): setTimout / setInterval / script / IO / UI Rendering

# 浏览器解析流程
从用户输入浏览器输入url到页面最后呈现 有哪些过程？
1. 用户输入URL地址
2. 浏览器解析URL解析出主机名
3. 浏览器将主机名转换成服务器ip地址（浏览器先查找本地DNS缓存列表 没有的话 再向浏览器默认的DNS服务器发送查询请求 同时缓存）
4. 浏览器将端口号从URL中解析出来
5. 浏览器建立一条与目标Web服务器的TCP连接（三次握手）
6. 浏览器向服务器发送一条HTTP请求报文
7. 服务器向浏览器返回一条HTTP响应报文
8. 关闭连接 浏览器解析文档
9. 如果文档中有资源 重复6 7 8 动作 直至资源全部加载完毕

# 浏览器渲染主要流程
1. HTML解析出DOM Tree
2. CSS解析出Style Rules
3. 将二者关联生成Render Tree
4. Layout 根据Render Tree计算每个节点的信息
5. Painting 根据计算好的信息绘制整个页面

# 页面渲染优化
浏览器对上文介绍的关键渲染路径进行了很多优化，针对每一次变化产生尽量少的操作，还有优化判断重新绘制或布局的方式等等。
在改变文档根元素的字体颜色等视觉性信息时，会触发整个文档的重绘，而改变某元素的字体颜色则只触发特定元素的重绘；改变元素的位置信息会同时触发此元素（可能还包括其兄弟元素或子级元素）的布局和重绘。某些重大改变，如更改文档根元素的字体尺寸，则会触发整个文档的重新布局和重绘，据此及上文所述，推荐以下优化和实践：</br>
1. HTML文档结构层次尽量少，最好不深于六层；
2. 脚本尽量后放，放在前即可；
3. 少量首屏样式内联放在标签内；
4. 样式结构层次尽量简单；
5. 在脚本中尽量减少DOM操作，尽量缓存访问DOM的样式信息，避免过度触发回流；
6. 减少通过JavaScript代码修改元素样式，尽量使用修改class名方式操作样式或动画；
7. 动画尽量使用在绝对定位或固定定位的元素上；
8. 隐藏在屏幕外，或在页面滚动时，尽量停止动画；
9. 尽量缓存DOM查找，查找器尽量简洁；
10. 涉及多域名的网站，可以开启域名预解析

# JS同源策略(same-origin policy)
同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。
URL 结果 原因
http://store.company.com/dir2/other.html 成功 只有路径不同
http://store.company.com/dir/inner/another.html 成功 只有路径不同
https://store.company.com/secure.html 失败 不同协议 ( https和http )
http://store.company.com:81/dir/etc.html 失败 不同端口 ( http:// 80是默认的)
http://news.company.com/dir/other.html 失败 不同域名 ( news和store )

# 跨标签页通讯
不同标签页间的通讯，本质原理就是去运用一些可以 共享的中间介质，因此比较常用的有以下方法:
通过父页面window.open()和子页面postMessage
  异步下，通过 window.open('about: blank') 和 tab.location.href = '*'
设置同域下共享的localStorage与监听window.onstorage
  重复写入相同的值无法触发
  会受到浏览器隐身模式等的限制
设置共享cookie与不断轮询脏检查(setInterval)
借助服务端或者中间层实现

# 跨域及解决方案
之所以会发生跨域，是因为同源策略的限制。</br>
跨域有什么影响呢？主要以下三点：</br>
1. 存储空间不共享，一个源中的Javascript脚本不能对属于其它源的数据进行读写操作。如Cookie、LocalStorage、IndexedDB。
2. 不能获取 dom 节点
3. 不能进行 Ajax 通信

## 解决方案
- CORS 跨域

CORS(Cross-Origin Resource Sharing) 可以理解为加强版的 Ajax。它的核心思想即前端与后端进行 Ajax 通信时，通过自定义 HTTP 头部设置从而决定请求或响应是否生效。比如前端代码(url 为 http://127.0.0.1:3001)写了段 Ajax，代码如下：
```
$.ajax({
	type: "GET",
	url: "http://127.0.0.1:3000",
	success: function(data) {
      console.log("ajax success.", data);
	},
	error: function(error) {
	  console.log("ajax error.", error);
	}
});
```
这时候就需要在服务端设置字段 Access-Control-Allow-Origin，它的作用就是设置允许来自什么源的请求。 如果值设置为 *，表明允许来自任意源的请求。服务端代码示例如下：
```
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3001') // 设置允许来自 http://127.0.0.1:3001 源的请求
})
```

- nginx反向代理

由于端口号不同，请求发出后肯定会发生跨域问题。
这时可以通过配置Nginx代理服务进行转发。找到 nginx.conf 文件，在编辑器中打开，配置如下：
```
http {
    include       mime.types;
    default_type  application/octet-stream;
    server {
        ...

        # 添加如下代码
        # 捕获URL中含有"/api/ms"字符串的请求，拦截后进行转发处理
        location /api/ms
        {
          rewrite             /api/ms/(.*) /$1 break;
          proxy_pass  "http://127.0.0.1:3000";
        }
    }
}
```
这种方式应用也比较广泛，但是需要额外起一个Nginx服务。

- WebSockets

WebSockets 属于 HTML5 的协议，它的目的是在一个持久连接上建立全双工通信。 由于 WebSockets 采用了自定义协议，所以优点是客户端和服务端发送数据量少，缺点是要额外的服务器。基础的使用方法如下：
```
const ws = new WebSocket('ws://127.0.0.1:3000')
ws.onopen = function() {
  // 连接成功建立
}

ws.onmessage = function(event) {
  // 处理数据
}

ws.onerror = function() {
  // 发生错误时触发，连接中断
}

ws.onclose = function() {
  // 连接关闭时触发
}
```

- JSONP

提到 JSONP 跨域，不得不先提到 script 标签，和 img、iframe 标签类似，这些标签是不受同源策略限制的，JSONP 的核心就是通过动态加载 script 标签来完成对目标 url 的请求。
前端代码示例：(源为 http://127.0.0.1:3001)
```
function handleResponse(res) {
  console.log(res) // {text: "jsonp"}
}
const script = document.createElement('script')
script.src = 'http://127.0.0.1:3000?callback=handleResponse'
document.head.appendChild(script)
```
callback=handleResponse，这个 callback 后面跟着的 handleResponse 即回调函数名（可以任意取）。 当服务端接收到这个参数后会拼接成形如 handleResponse(JSON) 的形式返还给前端，故称之为JSONP (JSON with Padding)。 这时候浏览器就会自动调用我们事先定义好的 handleResponse 函数。
缺点：
它没有关于JSONP调用的错误处理，一旦回调函数调用失败，浏览器会以静默失败的方式处理。
它只支持GET请求，这是由于该技术本身的特性所决定的。
因此，对于一些需要对安全性有要求的跨域请求，JSONP的使用需要谨慎一点了。

- hash + iframe

 iframe 标签也是不受同源策略限制的标签之一，hash + iframe 的跨域核心思想就是， 在 A 源中通过动态改变 iframe 标签的 src 的哈希值， 在 B 源中通过 window.onhashchange 来捕获到相应的哈希值。思路不难直接上代码：
 A 页面代码示例(源为 http://127.0.0.1:3000)
```
<body>
  <iframe src="http://127.0.0.1:3001"></iframe>
  <script>
    const iframe = document.getElementsByTagName('iframe')[0]
    iframe.setAttribute('style', 'display: none')
    const obj = {
      data: 'hash'
    }
    iframe.src = iframe.src + '#' + JSON.stringify(obj) // ① 关键语句
  </script>
</body>
```
B 页面代码示例(源为 http://127.0.0.1:3001)
```
window.onhashchange = function() { // ① 关键语句
  console.log('来自 page2 的代码 ' + window.location.hash) // 来自 page2 的代码 #{"data":"hash"}
}
```
刷新 A 页面，可以发现在控制台打印了如下字段，至此实现了跨域。来自 page2 的代码 #{"data":"hash"} 这种方式进行跨域优点是支持页面和页面间的通信，缺点也是只支持 GET 方法和单向的跨域通信。

- postMessage

为了实现跨文档传送(cross-document messaging)，简称 XDM。 HTML5 给出了一个 api —— postMessage。 postMessage() 方法接收两个参数：发送消息以及消息接收方所在域的字符串。代码示例如下:

A 页面代码示例(源为 http://127.0.0.1:3000)
```
<body>
  <iframe src="http://127.0.0.1:3001"></iframe>
  <script>
    const iframe = document.getElementsByTagName('iframe')[0]
    iframe.setAttribute('style', 'display: none')
    iframe.onload = function() { // 此处要等 iframe 加载完毕，后续代码才会生效
      iframe.contentWindow.postMessage('a secret', 'http://127.0.0.1:3001')
    }
  </script>
</body>
```
B 页面代码示例(源为 http://127.0.0.1:3001)
```
window.addEventListener('message', function(event) {
  console.log('From page1 ' + event.data)
  console.log('From page1 ' + event.origin)
}, false)
```
刷新 A 页面，可以发现在控制台打印了如下字段，至此实现了跨域。
From page1 a secret
From page1 http://127.0.0.1:3000
这种跨域方式优点是是支持页面和页面间的双向通信，缺点也是只能支持 GET 方法调用。

- document.domain

这种方案有个限制，即当主域名，协议和端口相同，只有子域名不同时才能使用。
例如：https://tieba.baidu.com下页面的脚本和http://news.baidu.com下页面的脚本可以设置他们的document.domain属性为baidu.com，从而让这两个站点下面的文档看起来像在同源下，然后就可以让每个文档读取另一个文档的属性。
所以这种方案实际应用的并不多。

# 浏览器数据本地存储方法（localStroage、sessionStroage、cookie、indexedDB）
Cookie
web存储 (locaStorage和seesionStorage)
IndexedDB

在H5出现之前，数据都是存储在cookie中的。为了解决cookie的局限性引入了Web存储，indexedDB用于客户端存储大量结构化数据(包括, 文件/ blobs)。

共同点：都是保存在浏览器端、且同源的
区别：
Cookie localStorage sessionStorage indexedDB

容量大小 4kb左右 5M左右 5M左右 无限容量

过期时间 只在设置的过期时间之前一直有效，即使窗口或者浏览器关闭 始终有效 当前浏览器窗口关闭前有效 始终有效

存储方式 浏览器和服务器间来回传递 本地保存 本地保存 本地保存

作用域 在同源窗口中共享 在同源窗口中共享 在同源窗口并且同一窗口中共享 在同源窗口中共享

# Web安全举例
https://juejin.im/entry/5a559dd36fb9a01c9e45d896

# HTTP缓存机制
https://www.cnblogs.com/chenqf/p/6386163.html