function findMin(arr) {
    let min = arr[0];

    for (let elem of arr) {
        if (typeof elem === 'number' && (min === arr[0] || elem < min)) {
            min = elem;
        }
    }
    return min;
}


console.log(findMin([2, 17, 53, 'cat', 15, 105, 73, 'hello', -7, 12, 0]));
console.log(findMin([ 'cat',  'hello' ]));
console.log(findMin([ 'cat',  'hello', 'js', 'is', 'awesome' ]));
console.log(findMin([ 2, 15, 75, 0 ]));