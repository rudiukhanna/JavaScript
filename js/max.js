// Пошук максимального значення елемента масиву

const arr2 = [2, 17, 53, 15, 105, 73, -7, 12, 0];

let biggestElem = arr2[0];
// роблю припущення, що перший елемент має максимальне значення;

for (let elem of arr2){
    if(elem > biggestElem && typeof elem === 'number' ){
        biggestElem = elem;
    }
}

console.log(biggestElem);