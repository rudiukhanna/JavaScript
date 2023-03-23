// Пошук суми елементів масиву

const arr = [2, 17, 'hello', 53, 15, 105, 'cat', 73, -7, 12, 0, 'js', 27];

let sum = 0;

for ( let elem of arr ) {
   if (typeof elem === 'number') {
    sum += elem;
   }
}

console.log(sum);