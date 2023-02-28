// Пошук мінімального значення елемента масиву

const arr1 = [2, 17, 53, 15, 105, 73, -7, 12, 0];

let smallestElem = arr1[0]; 
// роблю припущення, що перший елемент має мінімальне значення, та присвоюю його змінній;

for (let elem of arr1){
    if (elem < smallestElem && typeof elem === 'number' ) {
        smallestElem = elem;
    }
}

console.log(smallestElem);