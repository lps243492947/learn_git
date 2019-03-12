dom event(事件)
  - dom
    onclick 事件注册只有一个 js刚出的时候就有 是dom-0的标准
    addEventListener('click') 不限 js发展一段时间后才有 是dom-2的标准
    addEventListener('keyup') 不限                      dom-3

  - event
    event.stopProgration() 阻止事件冒泡
    event.stopImmediatePropagation() 阻止后面的事件执行
    event.currentTarget, event.target currentTarget 当前事件被绑定的元素 target 点击的元素

  - dom 事件流
    捕获 (capture)
    window -> document(documentElement) -> body -> 父级 -> 目标元素
    冒泡 (bubble)
    目标元素 -> 父级 -> body -> document(documentElement) -> window
    事件按照 dom流 的顺序执行我的事件回调
    处于目标阶段的时候 事件调用顺序取决于事件注册的顺序

  - 事件代理 (事件委托)
    event-question.html
    原理：冒泡 点击这个元素冒泡到上一级 上一级根据event.target.innerHTML输出内容