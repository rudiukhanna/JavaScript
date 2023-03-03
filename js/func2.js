function getDifference(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'One of arguments is not a number type';
    }

    return dif = num1 - num2;
}

   console.log(getDifference(6, 5));
   console.log(getDifference('three', 5));
   console.log(getDifference(2, 5));