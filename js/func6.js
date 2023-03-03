function getBiggestElem(arr) {
    let biggestElem = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if ( arr[i] >  biggestElem) {
        biggestElem = arr[i];
      }
    }

    return biggestElem;
}

console.log(getBiggestElem([2, 17, 53, 15, 105, 73, -7, 12, 0])) 