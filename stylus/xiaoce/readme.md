不再写css，写的是css的预编译语言stylus
特点：快
一套语法，支持现代css开发，有一个compile过程
stylus style.styl -o style.css 
-o output 输出
stylus -w style.styl -o style.css
watch 一直监听style.styl文件的修改，实时的去生成style.css

1. 跟css的规则说byebye {} : ; 取而代之tab
2. stylus 提供嵌套功能 可以帮我们补上前面的选择器 现在我们的css就模块化了 从此css就有编程的感觉了
3. &运算符 依然使用tab缩进，但是它与上一级同级，适合于同一个元素多个类名，.active 或者伪类，伪状态
4. 变量定义 将常用的或者是重复使用的 (css不是编程语言，是表达性的) 在最上面统一定义后，可以修改一处，所有使用了此变量的地方都会跟着修改成
为网站的风格

css 语法
  1. overf: hidden
  2. flex align-items 搞定vertical-align有时不好搞得情况 vertical-align 兄弟之间 img + 兄弟
  3. text-rendering: optimizeLegibility; 抗锯齿 高清手机上文字的边缘不出现锯齿
  4. flex-shrink:0 不该收缩的绝对不收缩
     flex-grow
  5. 第几个元素的选择
     :first-child :last-child
     :nth-child(2n) :nth-child(2n+1)
  6. -apple-system