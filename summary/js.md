# js
## JS的基本数据类型
string number boolean undefined null Symbol
## JS有哪些内置对象
数据封装类对象: String Number Boolean Array Object
其他对象: Function Math Date Error Arguments RegExp
## 宿主对象和原生对象的区别
原生对象(native object)是由ECMAScript规范定义的JavaScript内置对象，如 String Number Boolean Array Object Function Math Date Error Arguments RegExp等。
宿主对象(host object)是由运行时的环境(浏览器或node)决定的，如window、XMLHTTPRequest等。
## null、undefined及未声明变量之间的区别。如何区分？
1. 未声明变量默认值为undefined
2. typeof null === 'object' // true
3. typeof undefined === 'undefined' // true
## 隐式转换
JS在使用运算符号或者对比符时，会自带隐式转换，规则如下:
1. -、*、/、% ：一律转换成数值后计算
2. +：
  数字 + 字符串 = 字符串， 运算顺序是从左到右
  数字 + 对象， 优先调用对象的valueOf -> toString
  数字 + boolean/null -> 数字
  数字 + undefined -> NaN
3. [1].toString() === '1'
4. {}.toString() === '[object object]'
5. NaN !== NaN 、+undefined 为 NaN
6. https://juejin.im/post/5a7172d9f265da3e3245cbca
## 如何判断一个值是否是NaN
等号运算符（== 和 ===） 不能被用来判断一个值是否是 NaN。必须使用 Number.isNaN() 或 isNaN() 函数。
## 什么是'user strict'(严格模式)，使用它有什么优缺点？ 
'use strict' 是用于对整个脚本或单个函数启用严格模式的语句。严格模式是可选择的一个限制 JavaScript 的变体一种方式 。
优点：
1. 无法再意外创建全局变量。
2. 会使引起静默失败（silently fail，即：不报错也没有任何效果）的赋值操抛出异常。
3. 试图删除不可删除的属性时会抛出异常（之前这种操作不会产生任何效果）。
4. 要求函数的参数名唯一。
5. 全局作用域下，this的值为undefined。
6. 捕获了一些常见的编码错误，并抛出异常。
7. 禁用令人困惑或欠佳的功能。

缺点：
1. 缺失许多开发人员已经习惯的功能。
2. 无法访问function.caller和function.arguments。
3. 以不同严格模式编写的脚本合并后可能导致问题。
## 如何判断是否为空数组
```
var arr = [];
if (Array.isArray(arr) && arr.length === 0) {
    console.log('是空数组');
}
// Array.isArray是ES5提供的，如果不支持。用下面的方案。
if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}
```
## 数组方法
1. map: 遍历数组，返回回调返回值组成的新数组
2. forEach: 无法break，可以用try/catch中throw new Error来停止
3. filter: 过滤
4. some: 有一项返回true，则整体为true
5. every: 有一项返回false，则整体为false
6. join: 通过指定连接符生成字符串
7. sort(fn) / reverse: 排序与反转，改变原数组
8. concat: 连接数组，不影响原数组， 浅拷贝
9. slice(start, end): 返回截断后的新数组，不改变原数组
10. splice(start, number, value...): 返回删除元素组成的数组，value 为插入项，改变原数组
11. indexOf / lastIndexOf(value, fromIndex): 查找数组项，返回对应的下标
12. reduce / reduceRight(fn(prev, cur), defaultPrev): 两两执行，prev 为上次化简函数的return值，cur 为当前值(从第二项开始)
### 数组乱序
```
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function () {
  return Math.random() - 0.5;
});
```
### 数组拆解
```
// flat: [1,[2,3]] --> [1, 2, 3]
Array.prototype.flat = function() {
  return this.toString().split(',').map(item => +item )
}
```
## 对象的遍历方法
- for循环

```
  for (let property in obj) {
    console.log(property);
  }
```
- Object.keys()

`Object.keys(obj).forEach((property) => { ... })`
Object.keys()方法会返回一个由一个给定对象的自身可枚举属性组成的数组。
- Object.getOwnPropertyNames()

`Object.getOwnPropertyNames(obj).forEach((property) => { ... })`
Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组。

## 数组的遍历方法
- for loops

`for (let i = 0; i < arr.length; i++) { ... }`

- forEach

`arr.forEach((item, index, arr) { ... })`

- map

`arr.map((item, index, arr) => { ... })`

## DOM操作(增删改查)
- 添加操作

```
  let element = document.createElement("div");   // 创建元素
  body.appendChild(element);  // 将一个节点添加到指定父节点的子节点列表末尾
```

- 删除操作

```
  var oldChild = node.removeChild(child); // 删除子元素
  ChildNode.remove() // 删除元素
```

- 修改操作

```
  Node.innerText // 修改元素文本内容
  Element.innerHTML // 设置或获取描述元素后代的HTML语句
```

- 查找操作

```
  Document.getElementById() // 返回对拥有指定 id 的第一个对象的引用
  Document.querySelector() // 返回文档中匹配指定的CSS选择器的第一元素
  Document.querySelectorAll() // 返回与指定的选择器组匹配的文档中的元素列表
```

## 异步加载JS 的方式
浏览器下载除JS外的资源时，会并行下载，以提高性能。但下载JS脚本时，会禁止并行下载（称为脚本阻塞Scripts Block Downloads）。浏览器遇到JS时，必须等JS下载，解析，执行完后，才能继续并行下载下一个资源。原因是JS可能会改变页面或改变JS间的依赖关系，例如A.js中用document.write改变页面，B.js依赖于A.js。因此要严格保证顺序，不能并行下载。
由于浏览器在遇到<body>标签前是不会渲染页面的，为了避免白屏，通常的建议是将JS放到标签底下，可以有最佳的用户体验。
1. 动态创建<script>标签(Dynamic Script Element)
```
 var script = document.createElement('script');  // 创建script标签
 script.type = "text/javascript";
 script.src = "A.js";
 document.getElementsByTagName('head')[0].appendChild(script);   // 塞进页面
```
先用document.createElement(‘script’)生成一个script标签，再设置它的src属性，最后将其插入到<head>中。
2. Script async
`<script type="text/javascript" src="A.js" defer></script>`
这种方式只适用于引用外部js文件的<script>标签。添加async属性的js文件不应该使用document.write方法。对多个带有async的js文件，它不能保证按顺序执行，它是哪个js文件先下载完就先执行哪个。
3. Script defer
`<script type="text/javascript" src="A.js" defer></script>`
defer也是只适用于外部js文件，也不能在js中使用document.write方法。
## 如何判断当前脚本运行在浏览器还是node环境中
`this === window ? 'browser' : 'node';`
## JS内存空间的管理
- 基础数据类型与栈内存

JS中的基础数据类型，这些值都有固定的大小，往往都保存在栈内存中，由系统自动分配存储空间。我们可以直接操作保存在栈内存空间的值，因此基础数据类型都是按值访问。数据在栈内存中的存储与使用方式类似于数据结构中的堆栈数据结构，遵循后进先出的原则。

- 引用数据类型与堆内存

与其他语言不同，JS的引用数据类型，比如数组Array、对象Object、函数Function，它们值的大小是不固定的。引用数据类型的值是保存在堆内存中的对象。JavaScript不允许直接访问堆内存中的位置，因此我们不能直接操作对象的堆内存空间。
栈内存 堆内存

存储基础数据类型 存储引用数据类型

按值访问 | 按引用访问

存储的值大小固定 | 存储的值大小不定，可动态调整

由系统自动分配内存空间 | 由开发人员通过代码分配

主要用来执行程序 | 主要用来存放对象

空间小，运行效率高 | 空间大，但是运行效率相对较低

先进后出，后进先出 | 无序存储，可根据引用直接获取
## JS执行上下文
https://segmentfault.com/a/1190000012646203
## JS变量对象详解
https://segmentfault.com/a/1190000012646211
## 解释作用域及变量提升
https://segmentfault.com/a/1190000003114255
## 作用域链以及闭包
https://segmentfault.com/a/1190000012646221
## JS中的this
https://segmentfault.com/a/1190000012646234
## 解释SPA(单页应用)，优缺点是什么？如何使其对SEO友好
单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。

单页应用SPA 多页应用MPA

组成 一个外壳页面和多个页面片段组成 | 多个完整页面构成

资源共用(css,js) 共用，只需在外壳部分加载 | 不共用，每个页面都需要加载

刷新方式 页面局部刷新或更改 | 整页刷新

url模式 a.com/#/pageonea.com/#/pagetwo | a.com/pageone.html a.com/pagetwo.html

用户体验 页面片段间的切换快，用户体验良好由于要一次加载所有的资源(html/js)，故首屏加载慢 | 页面切换加载缓慢，流畅度不够，用户体验比较差首屏加载很快

转场动画 容易实现 | 无法实现

数据传递 容易 | 依赖 url传参、或者cookie 、localStorage等

搜索引擎优化(SEO) 需要单独方案、实现较为困难、不利于SEO检索。Prerender预渲染优化SEO | 实现方法简易

试用范围 高要求的体验度、追求界面流畅的应用 | 适用于追求高度支持搜索引擎的应用

开发成本 较高，常需借助专业的框架 | 较低，但页面重复代码多

维护成本 相对容易 | 相对复杂
# 判断对象的数据类型
- typeof
  typeof是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括number,string,boolean,undefined,object,function,symbol等。(typeof 只能判断基础数据类型)
```
  typeof "";  //string
  typeof 1;   //number
  typeof false; //boolean
  typeof undefined; //undefined
  typeof function(){}; //function
  typeof {}; //object
  typeof Symbol(); //symbol
  typeof null; //object
  typeof []; //object
  typeof new Date(); //object
  typeof new RegExp(); //object
```

- instanceof
  instanceof用来判断A是否为B的实例，表达式为：A instanceof B，如果A是B的实例，则返回true，否则返回false。instanceof检测的是原型，内部机制是通过判断对象的原型链中是否有类型的原型。(instanceof 只能判断复杂数据类型)
  ```
  {} instanceof Object; //true
  [] instanceof Array;  //true
  [] instanceof Object; //true
  "123" instanceof String; //false
  new String(123) instanceof String; //true
  ```
> 我们可以用下面的代码实现instanceof。

```
function instance(left,right){
    let prototype = right.prototype;  //获取类型的原型
    let proto = left.__proto__;       //获取对象的原型
    while(true){    //循环判断对象的原型是否等于类型的原型，直到对象原型为null，因为原型链最终为null
       if (proto === null || proto === undefined){
           return false;
       }
       if (proto === prototype){
           return true;
       }
       proto = proto.__proto__;
     }
}
console.log(instance({},Object)); //true
console.log(instance([],Number)); //false
```

- constructor
  当一个函数F被定义时，JS引擎会为F添加prototype原型，然后在prototype上添加一个constructor属性，并让其指向F的引用，F利用原型对象的constructor属性引用了自身，当F作为构造函数创建对象时，原型上的constructor属性被遗传到了新创建的对象上，从原型链角度讲，构造函数F就是新对象的类型。这样做的意义是，让对象诞生以后，就具有可追溯的数据类型。
  <img src="https://img2018.cnblogs.com/blog/1523596/201901/1523596-20190128175441624-282258963.png">

- Object.prototype.toString.call()
  toString()是Object的原型方法，调用该方法，默认返回当前对象的[[Class]]。这是一个内部属性，其格式为[object Xxx],其中Xxx就是对象的类型。
  对于Object对象，直接调用toString()就能返回[object Object],而对于其他对象，则需要通过call、apply来调用才能返回正确的类型信息。
  <img src="https://img2018.cnblogs.com/blog/1523596/201901/1523596-20190128180522674-291035001.png">

- 封装一个准确判断数据类型的函数
```
function getType(obj){
  let type  = typeof obj;
  if(type != "object"){
    return type;
  }
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}
```

# 循环实现数组方法
1. forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
2. map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。map()方法按照原始数组元素顺序依次处理元素
3. filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。没有到没有符合条件时返回空数组。
4. reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
 	    forEach	   map	  filter	reduce
操作	循环（迭代）	映射	过滤器	汇总
返回值	undefined	返回新数组	返回新数组	返回计算结果total
改变原数组？看情况	否	  否	  否
检测空数组？不检测	不检测	不检测	不检测

```
2.forEach方法：
var b = [1,2,3];
var f = []
b.forEach(function(v){
    f.push(v*100)
});
console.log(f);    //[100, 200, 300]
console.log(b);    // [1, 2, 3]
 
2. forEach方法:
var b = [1,2,3];
b.forEach(function(item,index,arr){
    arr[index] = item*100;
});
console.log(b);    //[100, 200, 300]
 
3.map方法：
var b = [1,2,3];
var c = b.map(function(v){ return v*100} )
console.log(c);   //[100, 200, 300]
```

> filter方法主要是对数组的筛选过滤，返回符合条件的元素

------ 对于数组
```
// 筛选出大于3的数
[2, 3, 4, 5,10].filter(function(val, index) {
    return val > 3;  //[4,5,10]
})
// 筛选出能整除5的数
[2, 3, 4, 5,10].filter(function(val, index) {
   return val % 5 == 0;  //[5,10]
})
```

----- 对于json数组
筛选对象数组中含有‘orange’属性值的对象
```
1.filter方法
var newArr = arr.filter(function(item){
  return item.name === "orange";
});
console.log(newArr);//
[{"name":"orange", "count": 5},
{"name":"orange", "count": 16}]

2.forEach方法
var newArr2 = [];
arr.forEach(function(v){
    if(v.name === 'orange'){
        newArr2.push(v)
    }
});
console.log(newArr2);//
[{"name":"orange", "count": 5},
{"name":"orange", "count": 16}]

3.map方法
var newArr3 = arr.map(function(item){
  return item.name === "orange";
});
console.log(newArr3);
//[false, true, false, true]
 
Console.log(‘-------------------------------’)
var newArr3 = arr.map(function(v){
    if(v.name === 'orange'){ return v }
});
console.log(newArr3)
//
[
    undefined,
    {"name":"orange", "count": 5},
    {"name":"orange", "count": 16},
    undefined
]
```

# 稀疏数组与密集数组
1. 稀疏数组
  <img src="https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180401145722777-984881073.png">
  <img src="https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180401150011402-942981920.png">
  当你遍历它时，你会发现，它并没有元素，JavaScript会跳过这些缝隙。数组元素实际只有2个，但是长度确实101。

2. 密集数组
  创建密集数组的技巧：var a = Array.apply(null, Array(3));
  <img src="https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180401150525970-1744627820.png">

# apply 、call、bind 的详解
https://github.com/lin-xin/blog/issues/7

# 函数柯里化
> 函数柯里化指的是将能够接收多个参数的函数转化为接收单一参数的函数，并且返回接收余下参数且返回结果的新函数的技术。
函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。

如何实现 multi(2)(3)(4)=24?
- 简单的实现
闭包
```
function multi(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    }
  }
}
```

- 柯里化
```
function curry(fn, args) {
  var length = fn.length;
  var args = args || [];
  return function(){
    newArgs = args.concat(Array.prototype.slice.call(arguments));
    if(newArgs.length < length){
      return curry.call(this,fn,newArgs);
    }else{
      return fn.apply(this,newArgs);
    }
  }
}
function multiFn(a, b, c) {
  return a * b * c;
}
var multi = curry(multiFn);
```
<img src="https://user-gold-cdn.xitu.io/2018/8/27/16578f158b64692c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">

简单来说，“柯里化”就像某些官员的把戏，官员要弄7个老婆，碍于国策（一夫一妻）以及年老弟衰，表面上就1个老婆，实际上剩下的6个暗地里消化。
```
var currying = function(fn) {
    // fn 指官员消化老婆的手段
    var args = [].slice.call(arguments, 1);
    // args 指的是那个合法老婆
    return function() {
        // 已经有的老婆和新搞定的老婆们合成一体，方便控制
        var newArgs = args.concat([].slice.call(arguments));
        // 这些老婆们用 fn 这个手段消化利用，完成韦小宝前辈的壮举并返回
        return fn.apply(null, newArgs);
    };
};

// 下为官员如何搞定7个老婆的测试
// 获得合法老婆
var getWife = currying(function() {
    var allWife = [].slice.call(arguments);
    // allwife 就是所有的老婆的，包括暗渡陈仓进来的老婆
    console.log(allWife.join(";"));
}, "合法老婆");

// 获得其他6个老婆
getWife("大老婆","小老婆","俏老婆","刁蛮老婆","乖老婆","送上门老婆");

// 换一批老婆
getWife("超越韦小宝的老婆");
```

>arguments 是一个类数组对象，它的值中包含了我们在调用函数时候，朝里面传入的参数。
<img src="https://img-blog.csdn.net/20180503204307836?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdmVmZW5ncnVvcWluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70">

# 偏函数
<img src="https://user-gold-cdn.xitu.io/2019/5/30/16b06a9df55ef5b4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">
<img src="https://user-gold-cdn.xitu.io/2019/5/30/16b06a9e05d4ac3a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">
偏函数和柯里化概念类似，个人认为它们区别在于偏函数会固定你传入的几个参数，再一次性接受剩下的参数，而函数柯里化会根据你传入参数不停的返回函数，直到参数个数满足被柯里化前函数的参数个数</br>
Function.prototype.bind 函数就是一个偏函数的典型代表，它接受的第二个参数开始，为预先添加到绑定函数的参数列表中的参数，与 bind 不同的是，上面的这个函数同样支持占位符

# 斐波那契数列及其优化
- 题目
```
function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
```

- 优化
当函数进行计算之前，先看缓存对象中是否有次计算结果，如果有，就直接从缓存对象中获取结果；如果没有，就进行计算，并将结果保存到缓存对象中。
```
let fibonacci = (function() {
  let memory = []
  return function(n) {
      if(memory[n] !== undefined) {
        return memory[n]
    }
    return memory[n] = (n === 0 || n === 1) ? n : fibonacci(n-1) + fibonacci(n-2)
  }
})()
```

```
var fibonacci = (function () {
  var memory = {}
  return function(n) {
    if(n==0 || n == 1) {
      return n
    }
    if(memory[n-2] === undefined) {
      memory[n-2] = fibonacci(n-2)
    }
    if(memory[n-1] === undefined) {
      memory[n-1] = fibonacci(n-1)
    }
    return memory[n] = memory[n-1] + memory[n-2]
  }
})()
```
# 实现函数 call 方法
https://blog.csdn.net/qq_36367995/article/details/81319852
```
Function.prototype.mycall = function(obj){
  obj = obj||window;
  var args = [];
  for(var i = 1 ; i < arguments.length; i++) {
     args.push('arguments[' + i + ']');
  }
  obj.fn = this;
  eval('obj.fn('+args+'));
  delete  obj.fn;
}
```
# 实现 apply 方法
```
Function.prototype.myapply = function(obj,arr){
    obj.fn = this;
      if(!arr){
          obj.fn();
    }else{
      var args = []; 
    for(var i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']');
    } 
    eval('obj.fn('+args+')');
  } 
  delete  obj.fn;
 
}
```

# 实现函数 bind 方法
https://blog.csdn.net/lovefengruoqing/article/details/80186401
```
if (!Function.prototype.bind) {
    Function.prototype.bind = function () {
        var self = this,                        // 保存原函数
        context = [].shift.call(arguments), // 保存需要绑定的this上下文
        args = [].slice.call(arguments);    // 剩余的参数转为数组
        return function () {                    // 返回一个新函数
            self.apply(context,[].concat.call(args, [].slice.call(arguments)));
        }
    }
}
```

# 函数防抖与函数节流
在进行窗口的resize、scroll，输入框内容校验等操作时，如果事件处理函数调用的频率无限制，会加重浏览器的负担，导致用户体验非常糟糕。此时我们可以采用debounce（防抖）和throttle（节流）的方式来减少调用频率，同时又不影响实际效果。</br>
函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。</br>
```
<script>
    window.onload = function() {
      // 1、获取这个按钮，并绑定事件
      var myDebounce = document.getElementById("debounce");
      myDebounce.addEventListener("click", debounce(sayDebounce));
    }
    // 2、防抖功能函数，接受传参
    function debounce(fn) {
      // 4、创建一个标记用来存放定时器的返回值
      let timeout = null;
      return function() {
        // 5、每次当用户点击/输入的时候，把前一个定时器清除
        clearTimeout(timeout);
        // 6、然后创建一个新的 setTimeout，
        // 这样就能保证点击按钮后的 interval 间隔内
        // 如果用户还点击了的话，就不会执行 fn 函数
        timeout = setTimeout(() => {
          fn.call(this, arguments);
        }, 1000);
      };
    }
    // 3、需要进行防抖的事件处理
    function sayDebounce() {
      // ... 有些需要防抖的工作，在这里执行
      console.log("防抖成功！");
    }
  </script>
```

函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。节流通俗解释就比如我们水龙头放水，阀门一打开，水哗哗的往下流，秉着勤俭节约的优良传统美德，我们要把水龙头关小点，最好是如我们心意按照一定规律在某个时间间隔内一滴一滴的往下滴。</br>
为什么需要 节流，因为有些事情会造成浏览器的 回流，而 回流 会使浏览器开销增大，所以我们通过 节流 来防止这种增大浏览器开销的事情。</br>
```
<script>
    window.onload = function() {
      // 1、获取按钮，绑定点击事件
      var myThrottle = document.getElementById("throttle");
      myThrottle.addEventListener("click", throttle(sayThrottle));
    }
    // 2、节流函数体
    function throttle(fn) {
      // 4、通过闭包保存一个标记
      let canRun = true;
      return function() {
        // 5、在函数开头判断标志是否为 true，不为 true 则中断函数
        if(!canRun) {
          return;
        }
        // 6、将 canRun 设置为 false，防止执行之前再被执行
        canRun = false;
        // 7、定时器
        setTimeout( () => {
          fn.call(this, arguments);
          // 8、执行完事件（比如调用完接口）之后，重新将这个标志设置为 true
          canRun = true;
        }, 1000);
      };
    }
    // 3、需要节流的事件
    function sayThrottle() {
      console.log("节流成功！");
    }
  </script>
```

# 重绘与回流
> 重绘(repaint)：当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要 UI 层面的重新像素绘制，因此损耗较少。

常见的重绘操作有：
1. 改变元素颜色
2. 改变元素背景色
3. more ……

> 回流(reflow)：又叫重排（layout）。当元素的尺寸、结构或者触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。

常见的回流操作有：

1. 页面初次渲染
2. 浏览器窗口大小改变
3. 元素尺寸/位置/内容发生改变
4. 元素字体大小变化
5. 添加或者删除可见的 DOM 元素
6. 激活 CSS 伪类（:hover……）
7. more ……

> 回流必定会触发重绘，重绘不一定会触发回流。重绘的开销较小，回流的代价较高。

如何避免大量使用重绘与回流：
1. 避免频繁操作样式，可汇总后统一一次修改
2. 尽量使用 class 进行样式修改，而不是直接操作样式
3. 减少 DOM 的操作，可使用字符串一次性插入

# 实现图片懒加载
## 懒加载的意义（为什么要使用懒加载）
对页面加载速度影响最大的就是图片，一张普通的图片可以达到几M的大小，而代码也许就只有几十KB。当页面图片很多时，页面的加载速度缓慢，几S钟内页面没有加载完成，也许会失去很多的用户。</br>
所以，对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区域内的图片先不做加载， 等到滚动到可视区域后再去加载。这样子对于页面加载性能上会有很大的提升，也提高了用户体验。

## 原理
将页面中的img标签src指向一张小图片或者src为空，然后定义data-src（这个属性可以自定义命名，我才用data-src）属性指向真实的图片。src指向一张默认的图片，否则当src为空时也会向服务器发送一次请求。可以指向loading的地址。

`<img src="default.jpg" data-src="http://ww4.sinaimg.cn/large/006y8mN6gw1fa5obmqrmvj305k05k3yh.jpg" />`

当载入页面时，先把可视区域内的img标签的data-src属性值负给src，然后监听滚动事件，把用户即将看到的图片加载。这样便实现了懒加载。

## 代码
```js
<script>
    var num = document.getElementsByTagName('img').length;
    var img = document.getElementsByTagName("img");
    var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
    lazyload(); //页面载入完毕加载可是区域内的图片
    window.onscroll = lazyload;
    function lazyload() { //监听页面滚动事件
      var seeHeight = document.documentElement.clientHeight; //可见区域高度
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
      for (var i = n; i < num; i++) {
        if (img[i].offsetTop < seeHeight + scrollTop) {
          if (img[i].getAttribute("src") == "default.jpg") {
            img[i].src = img[i].getAttribute("data-src");
          }
          n = i + 1;
        }
      }
    }
</script>
```

```jq
<script>
    var n = 0,
      imgNum = $("img").length,
      img = $('img');
    lazyload();
    $(window).scroll(lazyload);
    function lazyload(event) {
      for (var i = n; i < imgNum; i++) {
        if (img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
          if (img.eq(i).attr("src") == "default.jpg") {
            var src = img.eq(i).attr("data-src");
            img.eq(i).attr("src", src);
            n = i + 1;
          }
        }
      }
    }
</script>
```

## 使用节流函数进行性能优化
如果直接将函数绑定在scroll事件上，当页面滚动时，函数会被高频触发，这非常影响浏览器的性能。

```
// 简单的节流函数
//fun 要执行的函数
//delay 延迟
//time  在time时间内必须执行一次
function throttle(fun, delay, time) {
    var timeout,
        startTime = new Date();
    return function() {
        var context = this,
            args = arguments,
            curTime = new Date();
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= time) {
            fun.apply(context, args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
        } else {
          timeout = setTimeout(fun, delay);
        }
    };
};
// 实际想绑定在 scroll 事件上的 handler
function lazyload(event) {
  for (var i = n; i < imgNum; i++) {
    if (img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
      if (img.eq(i).attr("src") == "default.jpg") {
        var src = img.eq(i).attr("data-src");
          img.eq(i).attr("src", src);
            n = i + 1;
        }
      }
  }
}
// 采用了节流函数
window.addEventListener('scroll',throttle(lazyload,500,1000));
```

# async/await
https://juejin.im/post/5b1ffff96fb9a01e345ba704
## async
async 函数是 Generator 函数的语法糖。使用 关键字 async 来表示，在函数内部使用 await 来表示异步。</br>
相较于 Generator，async 函数的改进在于下面四点：
1. 内置执行器: Generator 函数的执行必须依靠执行器，而 async 函数自带执行器，调用方式跟普通函数的调用一样
2. 更好的语义: async 和 await 相较于 * 和 yield 更加语义化
3. 更广的适用性: co 模块约定，yield 命令后面只能是 Thunk 函数或 Promise对象。而 async 函数的 await 命令后面则可以是 Promise 或者 原始类型的值（Number，string，boolean，但这时等同于同步操作）
4. 返回值是 Promise: async 函数返回值是 Promise 对象，比 Generator 函数返回的 Iterator 对象方便，可以直接使用 then() 方法进行调用

> async是ES7新出的特性，表明当前函数是异步函数，不会阻塞线程导致后续代码停止运行

```
async function asyncFn() {
    return '我后执行'
}
asyncFn().then(result => {
    console.log(result);
})
console.log('我先执行');
```

<img src="https://user-gold-cdn.xitu.io/2018/6/19/16417f275d4f6c1c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">

上面的执行结果是先打印出'我先执行'，虽然是上面asyncFn()先执行，但是已经被定义异步函数了，不会影响后续函数的执行。</br>
async函数接收到返回的值，发现不是异常或者reject，则判定成功，这里可以return各种数据类型的值，false,NaN,undefined...总之，都是resolve
但是返回如下结果会使async函数判定失败reject

1. 内部含有直接使用并且未声明的变量或者函数。
2. 内部抛出一个错误throw new Error或者返回reject状态return Promise.reject('执行失败')
3. 函数方法执行出错（🌰：Object使用push()）等等...

> 还有一点，在async里，必须要将结果return回来，不然的话不管是执行reject还是resolved的值都为undefine，建议使用箭头函数。其余返回结果都是判定resolved成功执行。
## await
await意思是async wait(异步等待)。这个关键字只能在使用async定义的函数里面使用。任何async函数都会默认返回promise，并且这个promise解析的值都将会是这个函数的返回值，而async函数必须等到内部所有的 await 命令的 Promise 对象执行完，才会发生状态改变。打个比方，await是学生，async是校车，必须等人齐了再开车。就是说，必须等所有await 函数执行完毕后，才会告诉promise我成功了还是失败了，执行then或者catch</br>
很多人以为await会一直等待之后的表达式执行完之后才会继续执行后面的代码，实际上await是一个让出线程的标志。await后面的函数会先执行一遍，然后就会跳出整个async函数来执行后面js栈的代码。等本轮事件循环执行完了之后又会跳回到async函数中等待await后面表达式的返回值，如果返回值为非promise则继续执行async函数后面的代码，否则将返回的promise放入Promise队列（Promise的Job Queue）</br>
```
const timeoutFn = function(timeout){ 
	return new Promise(function(resolve){
		return setTimeout(resolve, timeout);
  });
}
async function fn(){
  await timeoutFn(1000);
  await timeoutFn(2000);
  return '完成';
}
fn().then(success => console.log(success));
```

上面执行函数内所有的await函数才会返回状态，结果是执行完毕3秒后才会弹出'完成'

# 发布订阅 EventEmitter
我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。

<img src="https://user-gold-cdn.xitu.io/2019/6/1/16b10e6615419ca0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">

通过 on 方法注册事件，trigger 方法触发事件，来达到事件之间的松散解耦，并且额外添加了 once 和 off 辅助函数用于注册只触发一次的事件以及注销事件