function Accumulator(startingValue) {

    if (typeof startingValue !== "number") {
        throw new Error("Starting value must be a number");
      }

        this.value = startingValue;  
 }


 Accumulator.prototype.increment = function() {
    this.value++;
 }


 Accumulator.prototype.decrement = function() {
    this.value--;
 }

const acc = new Accumulator(1);
console.log(acc())




 function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);
    this.startingValue = startingValue;
 }

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function() {
  this.value = this.startingValue;
};

const cAcc = new CancelableAccumulator(11);



