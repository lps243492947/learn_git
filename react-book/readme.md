- DOM 之后 MVVM 兴起  
MVVM 封装了DOM  让其更加高效
虚拟DOM
- 组件开发  UI开发
  分为多个组件， 拼装页面
  组件是一个类
  一个组件只要实例化一下  就可以用了
  可以复用
- 组件是一个粽子 ，里面有很多东西
  最基本的三个东西:
    template    render()(必须)
    css
    js  isLiked
- React 和 VUE 都是MVVM 的一种实现
  React 用来做后台界面 VUE 用户界面
  挂载点 界面跟组件的关系，界面 <- 组件 <-html
  DOM被封装 组件类
	constructor this.state 数据部分
	模板部分 render方法
	setData setState({})
	- 模板里数据的细化
		es6的字符串模板 每次编译
		setSTate this.render();
		状态和模板结合的地方在模板的编译，插入数据
		setState	驱动模板里重新编译一下 数据驱动