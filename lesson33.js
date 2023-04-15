
Array.prototype.pow = function(n) {
    
    const arr = [];

    for (let i = 0; i < this.length; i++) {
     arr.push(Math.pow(this[i], n))   ;
    }

    return arr;
}

const arr = [1, 7, 15, 20];
const res = arr.pow(2);
console.log(res);
