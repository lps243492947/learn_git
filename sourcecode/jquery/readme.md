DOM 树 有html结构，再加上CSS， DOM树将被生成，静态页面就有了。document这个时候触发DOMContentLoaded 有了元素结点，就可以做js的交互了
页面上海依赖于其他的一些资源 js，阻塞下载，img 是网页性能的杀手
window.onload 此时写js就晚了

如果不等事件的发生，js 操作可能无效