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


// Конструктор CancelableAccumulator

function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function(){
    this.value = startingValue;
}
