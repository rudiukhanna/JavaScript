function getSum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Arguments are not number type!';
    }

    return sum = num1 + num2;
}

console.log(getSum(3, 5));
console.log(getSum('three', 5));
console.log(getSum(2, true));