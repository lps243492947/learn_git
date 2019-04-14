var baseObj = {
    // 随机数
    randomNum: function(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min)
    }
}