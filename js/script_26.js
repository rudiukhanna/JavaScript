// Конструктор Accumulator

function Accumulator(startingValue) {
    this.value = startingValue;

    this.increment = function() {
        this.value++;
    };

    this.decrement = function() {
        this.value--;
    };
}

let acc = new Accumulator (2);
console.log(acc.value);
acc.increment;
console.log(acc.value);


// Конструктор CancelableAccumulator

function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype); 


CancelableAccumulator.prototype.clear = function(){
    this.value = startingValue;
}
