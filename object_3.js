const calc = {
    num1: 0,
    num2: 0,
    ask() {
     this.num1 = Number(prompt('Введіть перше число', 0));
     this.num2 = Number(prompt('Введіть друге число', 0));
    },
    sum() {
    console.log(this.num1 + this.num2); 
    },
    mul() {
     console.log(this.num1 * this.num2) ;
    },
}

calc.ask()
calc.sum()
calc.mul()
console.log(calc)