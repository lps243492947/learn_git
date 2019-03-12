# 作用域 Scope
document DOM
    getElementsByTagName
    getElementsByClassName
    querySelector
    querySelectorAll
window BOM
    全局定义了 var name = "";
    全局变量 前端js的全局就是window
    局部变量 function() {}
    window js是一个内嵌在浏览器中的脚本语言，它与其他语言不一样的地方在于 它有一个顶级的window，全局变量挂载在window上
    console.log(name); console.log(window.name);
    window 类型 typeof 
    数值 字符串 布尔值 null undefined Symbol object
    const let 比var 优秀的地方是它遵守块级作用域
    全局 -> 局部函数 -> 块级作用域
    scope 范围

    setTimeout  是异步的内置函数
    for 循环 立即同步执行
    1000 之后 i的值在var的时候变成了10,var无法生成块级作用域
    let 的时候 立马生成块级作用域 for  {块级作用域 let} 