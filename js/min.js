// Пошук мінімального значення елемента масиву

const arr1 = [2, 17, 'hello', 53, 15, 105, 'cat', 73, -7, 12, 0, 'js', 27];

let smallestElem = Number.isNaN(arr1[0]); 


for (let elem of arr1){
   if (elem < smallestElem) {
        smallestElem = elem;
   }
}

console.log(smallestElem);