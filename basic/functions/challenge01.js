function sum(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

console.log(sum(1)(2)(3));

console.log(sum(4)(8)(12));