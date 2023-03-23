function findMax(arr) {
    let max = undefined;

    for (let i = 0; i < arr.length; i++) {
     if(typeof arr[i] === 'number' && ( max === undefined || arr[i] > max)) {
      max = arr[i];
     }
}
   return max;
}

console.log(findMax([2, 17, 53, 'cat', 15, 105, 73, 'hello', -7, 12, 0])) 
console.log(findMax([ 'cat','hello' ])) 
console.log(findMax([ 'cat','hello', 'js', 'is', 'awesome', 0]));