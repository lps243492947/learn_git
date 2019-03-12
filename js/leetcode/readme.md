数值类型 字符串类型 布尔值类型 null undefined 基本数据类型
其他的都是Object Array 可遍历的对象 for()
JSON Object 对象字面量 可枚举的对象
function 也是对象
document.querySelectorAll('a'); 类数组
arr.push()
- 字符串是字符的数组 
    具有.length属性 以及str[]访问数组的能力
- 运算符匹配的问题时，选择数组作为数据结构，只在顶部做操作(push pop) 栈Stack 
    算法+数据结构 "()" 
    sta = [] 空 
    (sta.push("(") 入栈 sta.length = 1
    sta[0] = "(") 栈不为空 跟顶部元素进行比较，如果是一对，就把顶部的元素pop掉
    或者 push 为新的顶部
    sta 为空 返回true丨false

