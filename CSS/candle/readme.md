1. mixin 与函数的区别
    mixin是一段样式的封装，可以在引用的地方复用 stylus 是用的最多的
    函数有返回值，random(min,max)
2. stylus 有内置的函数库
    floor math(0, 'random')
3. 200个元素 stylus for
    for num in 1..200
        .g-ball:nth-child({num})
            $width = random(0, 40)
            width unit($width, 'px')
4. filter contrast(20) 加上 mix-blend-mode: screen (背景颜色混合) 变成火苗