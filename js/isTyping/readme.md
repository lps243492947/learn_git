类型检测是js 考点

<!-- new Array() -->
Object
Array 可遍历的对象
JSON Object 对象字面量 可枚举的对象 for(key in )
function 是一等对象

typeof 不靠谱

1. Object.prototype.toString()
  弥补typeof半吊子， []
  返回值 "[object object]"
2. 借给Array 用
  Object.prototype.toString.call([])
  函数上就有call，动态指定内部this的指向
3. js 的面向对象
  Type{isString}
4. 立即执行函数 + 嵌套函数定义 闭包
  type 就在这些嵌套函数被调用时可以引用到