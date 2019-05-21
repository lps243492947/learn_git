const add = (a, b) => {
    // 如果参数不对
    if(typeof a === 'string' && typeof b === 'string') {
        return + a + (+b);
    }
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return NaN;
}

module.exports = {
    add
}