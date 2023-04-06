const arr2 = [2, 17, 'hello', 53, 15, 105, 'cat', 73, -7, 12, 0, 'js', 27];

let biggestElem = Number.isNaN(arr2[0]); 
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > biggestElem) {
        biggestElem = arr2[i];
    }
}



const arr1 = [2, 17, 'hello', 53, 15, 105, 'cat', 73, -7, 12, 0, 'js', 27];

let smallestElem = Number.isNaN(arr1[0]); 


for (let elem of arr1){
   if (elem < smallestElem) {
        smallestElem = elem;
   }
}





const arr = [2, 17, 'hello', 53, 15, 105, 'cat', 73, -7, 12, 0, 'js', 27];

let sum = 0;

for ( let elem of arr ) {
   if (typeof elem === 'number') {
    sum += elem;
   }
}


let str = '';

for (let i = 0; i < 5; i++) {
    str += '#';
    console.log(str);
}