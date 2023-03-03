function getSmallestElem(arr) {
    
        let smallestElem = arr[0];

        for (let elem of arr){
            if (elem < smallestElem) {
                smallestElem = elem;
            }
        }
        
        return smallestElem;
}

console.log(getSmallestElem([2, 17, 53, 15, 105, 73, -7, 12, 0]))