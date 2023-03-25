// функція-конструктор Accumulator
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

// Перевірка

 let acc = new Accumulator(4);

 console.log(acc.value);
 acc.increment();
 console.log(acc.value);
 acc.decrement();
 console.log(acc.value);



 // Конструктор CancelableAccumulator

 function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);
    this.startingValue = startingValue;
 }

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function() {
  this.value = this.startingValue;
};


// Перевірка
 let cancAcc = new CancelableAccumulator(2);

 console.log(cancAcc.value);

 cancAcc.increment();
 console.log(cancAcc.value);

 cancAcc.increment();
 console.log(cancAcc.value);

 cancAcc.clear();
 console.log(cancAcc.value);
