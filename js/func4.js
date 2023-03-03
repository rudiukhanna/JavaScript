function getDivision(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'One of arguments is not a number type';
    } else if ( num2 === 0) {
        return 'Division is impossible!';
    }

    return div = num1/num2;
}

   console.log(getDivision(10, 5));
   console.log(getDivision('three', 5));
   console.log(getDivision(2, 0));