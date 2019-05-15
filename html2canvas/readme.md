- html2canvas 因为移动端网页分享，小程序不能直接分享到朋友圈，将整个网页或一部分网页转成canvas (canvas比dom树有更好的图片API)

    html2canvas(dom, {
        onrendered: function(canvas) {
            显示，css
        }
    })

- svg 是图片
  假如它能将dom 画在它内部的话
  foreignObject svg=> html

- window.getComputedStyle(dom, null)
  任何结点的css属性都能拿到