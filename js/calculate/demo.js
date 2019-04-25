var PerformanceS = function() {

}
PerformanceS.prototype.calculate = function(salary) {
    return salary * 5;
}
var PerformanceA = function() {

}
PerformanceA.prototype.calculate = function(salary) {
    return salary * 3;
}
var PerformanceB = function() {

}
PerformanceB.prototype.calculate = function(salary) {
    return salary * 2;
}
var PerformanceC = function() {

}
PerformanceC.prototype.calculate = function(salary) {
    return salary * 1;
}
var Bounce = function(salary) {
    this.salary = salary;
}
Bounce.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function() {
    return this.strategy.calculate(this.salary);
}
var bounce = new Bounce(20000);
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce());