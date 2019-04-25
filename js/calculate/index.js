// 会计 年终奖
// 绩效  S 5 A 3 B 2 C 1 D 0
// var calculateBounce = function(perfomanceLevel, salary) {
//     if(perfomanceLevel == 'S') {
//         return 1.5 * salary*12;
//     } else if (perfomanceLevel == 'A') {
//         return 1.3 * salary*12;
//     } else if (perfomanceLevel == 'B') {
//         return 1.2 * salary*12;
//     } else if (perfomanceLevel == 'C') {
//         return 1.1 * salary*12;
//     } else {
//         return salary*12;
//     }
// }
// 一个个的策略函数
var perfomanceS = function(salary) {
    return salary * 5;
}
var perfomanceA = function(salary) {
    return salary * 3;
}
var perfomanceB = function(salary) {
    return salary * 2;
}
var perfomanceC = function(salary) {
    return salary * 1;
}
var calculateBounce = function(perfomanceLevel, salary) {
    if(perfomanceLevel == 'S') {
        return perfomanceS(salary);
    }else if(perfomanceLevel == 'A') {
        return perfomanceA(salary);
    }else if(perfomanceLevel == 'B') {
        return perfomanceB(salary);
    }else if(perfomanceLevel == 'C') {
        return perfomanceC(salary);
    }else {
        return salary;
    }
}
console.log(calculateBounce('S',20000))