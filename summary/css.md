# a标签上四个伪类的执行顺序是怎么样的？
link > visited > hover > active

L-V-H-A love hate 用喜欢和讨厌两个词来方便记忆

# css 属性 content 有什么作用？
content 属性专门应用在 before/after 伪元素上，用于插入额外内容或样式。可减少标签的使用。

# 伪元素和伪类的区别和作用？
伪元素 -- 在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。
它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：
  p::before {content:"第一章：";}
  p::after {content:"Hot!";}
  p::first-line {background:red;}
  p::first-letter {font-size:30px;}
伪类 -- 将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：
  a:hover {color: #FF00FF}
  p:first-child {color: red}

# 在CSS样式中常使用 px、em 、rem的区别
- px（绝对长度单位）

在缩放页面时无法调整那些使用它作为单位的字体、按钮等的大小

- em（相对长度单位）

浏览器的默认字体都是16px，那么1em=16px，以此类推计算10px=0.625em
为了简化font-size的换算，一般都会在body中写入以下代码
  body { font-size: 62.5%; } /*  公式16px*62.5%=10px  */  
复制代码
em的值并不是固定的
em会继承父级元素的字体大小（参考物是父元素的font-size）
em中所有的字体都是相对于父元素的大小决定的；所以如果一个设置了font-size:1.2em的元素在另一个设置了font-size:1.2em的元素里，而这个元素又在另一个设置了font-size:1.2em的元素里，那么最后计算的结果是1.2X1.2X1.2=1.728em

- rem（相对长度单位）

rem单位可谓集相对大小和绝对大小的优点于一身
和em不同的是rem总是相对于根元素(如:root{})，而不像em一样使用级联的方式来计算尺寸。这种相对单位使用起来更简单。
rem支持IE9及以上，意思是相对于根元素html（网页），不会像em那样，依赖于父元素的字体大小，而造成混乱。使用起来安全了很多。

# display: none; 与 visibility: hidden; 的区别
联系：它们都能让元素不可见
区别：
1. display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility: hidden;不会让元素从渲染树消失，渲染树元素继续占据空间，只是内容不可见
2. display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility:hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式
3. 修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘
4. 读屏器不会读取display: none元素内容；会读取visibility: hidden元素内容

# 盒模型的理解
页面渲染时，dom 元素所采用的 布局模型。可通过box-sizing进行设置。

content-box (W3C 标准盒模型)

默认值，标准盒子模型。 width 与 height 只包括内容的宽和高， 不包括边框（border），内边距（padding），外边距（margin）。注意: 内边距、边框和外边距都在这个盒子的外部。 比如说，.box {width: 350px; border: 10px solid black;} 在浏览器中的渲染的实际宽度将是 370px。
尺寸计算公式：
width = 内容的宽度
height = 内容的高度
宽度和高度的计算值都不包含内容的边框（border）和内边距（padding）。

border-box (IE盒模型)

width 和 height 属性包括内容，内边距和边框，但不包括外边距。这是当文档处于 Quirks模式 时Internet Explorer使用的盒模型。注意，填充和边框将在盒子内 , 例如, .box {width: 350px; border: 10px solid black;} 导致在浏览器中呈现的宽度为350px的盒子。内容框不能为负，并且被分配到0，使得不可能使用border-box使元素消失。
尺寸计算公式：
width = border + padding + 内容的宽度
height = border + padding + 内容的高度
