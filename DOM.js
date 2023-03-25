let num1 = prompt('num1');
let num2 = prompt('num2');


//  Функція для перевірки на числовой тип
function areNumbers(num1,num2){
    if (isNaN(num1) || isNaN(num2)){
        return 'Arguments are not number type!';
    } else {
        return false;
    }
}

// Функція для перевірки на пусте введення
function areEmpty(num1,num2){
    if (num1 === '' || num2 === ''){
        return 'The entered value cannot be empty';
       } else {
        return false;
       }
}


//  Додавання 
function addition(num1, num2) {
    if(areNumbers(num1, num2)) {
        alert('Arguments are not number type!');
    }  else if (areEmpty(num1, num2)) {
        alert('The entered value cannot be empty!');
    } else {
        const result = Number(num1) + Number(num2);
        const resultElement = document.getElementById('addition');
        resultElement.textContent = result;
        resultElement.style.color = `rgb(${Math.abs(result) * 10}, 0, 0)`;
        return result; 
    }
}


// Віднімання
function subtraction(num1,num2) {
    if(areNumbers(num1, num2)) {
        alert('Arguments are not number type!');
    }  else if (areEmpty(num1, num2)) {
        alert('The entered value cannot be empty!');
    } else if (num1 < num2) {
        let message = confirm('Are you sure you want to continue?');
       if (message === true) {
        const result = num1 - num2;
        const resultElement = document.getElementById('subtraction');
        resultElement.textContent = result;
        resultElement.style.color = `rgb(${Math.abs(result) * 10}, 0, 0)`;
        return result; 
       } else {
        return 'Operation was cancelled';
       }
    } else {
        const result = num1 - num2;
        const resultElement = document.getElementById('subtraction');
        resultElement.textContent = result;
        resultElement.style.color = `rgb(${Math.abs(result) * 10}, 0, 0)`;
        return result; 
    }
}

// Множення
function multiplication(num1,num2) {
    if(areNumbers(num1, num2)) {
        alert('Arguments are not number type!');
    }  else if (areEmpty(num1, num2)) {
        alert('The entered value cannot be empty!');
    } else {
        const result = num1 * num2;
        const resultElement = document.getElementById('multiplication');
        resultElement.textContent = result;
        resultElement.style.color = `rgb(${Math.abs(result) * 10}, 0, 0)`;
        return result; 
    }
}


// Ділення
function division(num1,num2) {
     //Перетворюю num2 на число, щоб спрацювала умова перевірки на 0
    // за допомогою суворого порівняння
    num2 = Number(num2);

    if(areNumbers(num1, num2)) {
        alert('Arguments are not number type!');
    }  else if (areEmpty(num1, num2)) {
        alert('The entered value cannot be empty!');
    } else if (num2 === 0) {
        alert('Division is impossible!');
    } else {
        const result = num1 / num2;
        const resultElement = document.getElementById('division');
        resultElement.textContent = result;
        resultElement.style.color = `rgb(${Math.abs(result) * 10}, 0, 0)`;
        return result; 
    }
}


addition(num1, num2);
subtraction(num1, num2);
multiplication(num1, num2);
division(num1, num2);