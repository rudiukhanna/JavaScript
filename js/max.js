// Пошук максимального значення елемента масиву

const arr2 = [2, 17, 'hello', 53, 15, 105, 'cat', 73, -7, 12, 0, 'js', 27];

let biggestElem = Number.isNaN(arr2[0]); 
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > biggestElem) {
        biggestElem = arr2[i];
    }
}

console.log(biggestElem);