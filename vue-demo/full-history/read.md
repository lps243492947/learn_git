前端路由实现方式 history.pushState(data, title, url) 改变url的path部分
跟hashChange实现方案，不一样的地方是改变的url部位不一样(#开头), 前端就可以处理路由了
像极了后端路由
浏览历史  history onpopstate
push pop  因为像数组的尾部操作  栈