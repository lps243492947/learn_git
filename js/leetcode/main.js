//验证字符串符号的正确性
/**
 * 功能是 决定字符串中的符号是正确的
 * @param {*} str 字符串，包含()[]{}
 */
const isValid = (str) => {
    let sta = [],obj = {};
    obj["{"] = "}";
    obj["["] = "]";
    obj["("] = ")";
    // 1.空栈先入栈
    // 2.将栈顶元素匹配的消除规则元素与待入栈相比较，如果相同则pop栈顶元素，否则入栈
    // 3.重复2
    // 4.判断数组的长度，返回bool值
    // 将符号字符入栈 stack 0 栈底
    // str.length -1 顶部
    for(let i = 0 ; i < str.length ;i++) {
        if (!sta.length) {
            sta.push(str[i]);
        }   else {
            if(obj[sta[sta.length-1]] === str[i]) {
                sta.pop();
            }   else {
                sta.push(str[i]);
            }
        }
    }
    return !sta.length;
}

console.log(isValid('()')); // true
console.log(isValid('(])')); // false