class  类 js 现在也有了，es5 里面没有class关键字,怎么做面向对象呢?
js 是面向对象的，js里Function 是一等对象,他是Object一类，是可以被执行的对象
普通函数 Player()
当函数以 new Player(); 运行时，作为类的构造函数被运行，function Player() { this } this 一直都在，他是函数里的一个常在，他也是一个指针，会指向一个对象，this指向一个Object {} this.name = name 

函数运行方式的不同，里面的this指向不同
当他作为一个普通函数被运行的时候，this指针没有使命，全局 在前端指向的就是window，node指向global undefined
当函数作为构造函数被运行时，new Player()，这时this会指向实例化的对象，这个过程就是构造函数需要的过程

- 函数可以用来构造类，这是js借了东风，就是可以通过this
- this是一直存在的，他是一个指针
  函数的运行方式会导致this指向不一样
  在普通函数 this就指向全局window||global
  如果代码启动严格模式，this就会显示undefined  "use strict";
- new 过程之中发生了什么 this => {} constructor this.name = name
- 构造函数 constructor