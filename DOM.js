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
        resultElement.style.color = result < 0 ? 'red':'green';
        if(result < 0 && result >= -10) {
            return resultElement.style.color = 'rgb(248, 96, 96)';
        } else if (result < -10 && result >= -100) {
            return resultElement.style.color = 'rgb(228, 26, 26)';
        } else if (result < -100 && result >= -1000) {
            return resultElement.style.color = 'rgb(140, 14, 14)';
        } else if ( result < -1000 && result >= -10000) {
            return resultElement.style.color = 'rgb(87, 10, 10)';
        } else if (result < -10000 && result >= -1000000) {
            return resultElement.style.color = 'rgb(41, 3, 3)';
        }
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
        resultElement.style.color = result < 0 ? 'red':'green';
        if(result < 0 && result >= -10) {
            return resultElement.style.color = 'rgb(248, 96, 96)';
        } else if (result < -10 && result >= -100) {
            return resultElement.style.color = 'rgb(228, 26, 26)';
        } else if (result < -100 && result >= -1000) {
            return resultElement.style.color = 'rgb(140, 14, 14)';
        } else if ( result < -1000 && result >= -10000) {
            return resultElement.style.color = 'rgb(87, 10, 10)';
        } else if (result < -10000 && result >= -1000000) {
            return resultElement.style.color = 'rgb(41, 3, 3)';
        }
        return result; 
       } else {
        return 'Operation was cancelled';
       }
    } else {
        const result = num1 - num2;
        const resultElement = document.getElementById('subtraction');
        resultElement.textContent = result;
        resultElement.style.color = result < 0 ? 'red':'green';
        if(result < 0 && result >= -10) {
            return resultElement.style.color = 'rgb(248, 96, 96)';
        } else if (result < -10 && result >= -100) {
            return resultElement.style.color = 'rgb(228, 26, 26)';
        } else if (result < -100 && result >= -1000) {
            return resultElement.style.color = 'rgb(140, 14, 14)';
        } else if ( result < -1000 && result >= -10000) {
            return resultElement.style.color = 'rgb(87, 10, 10)';
        } else if (result < -10000 && result >= -1000000) {
            return resultElement.style.color = 'rgb(41, 3, 3)';
        }
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
        resultElement.style.color = result < 0 ? 'red':'green';
        if(result < 0 && result >= -10) {
            return resultElement.style.color = 'rgb(248, 96, 96)';
        } else if (result < -10 && result >= -100) {
            return resultElement.style.color = 'rgb(228, 26, 26)';
        } else if (result < -100 && result >= -1000) {
            return resultElement.style.color = 'rgb(140, 14, 14)';
        } else if ( result < -1000 && result >= -10000) {
            return resultElement.style.color = 'rgb(87, 10, 10)';
        } else if (result < -10000 && result >= -1000000) {
            return resultElement.style.color = 'rgb(41, 3, 3)';
        }
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
        resultElement.style.color = result < 0 ? 'red':'green';
        if(result < 0 && result >= -10) {
            return resultElement.style.color = 'rgb(248, 96, 96)';
        } else if (result < -10 && result >= -100) {
            return resultElement.style.color = 'rgb(228, 26, 26)';
        } else if (result < -100 && result >= -1000) {
            return resultElement.style.color = 'rgb(140, 14, 14)';
        } else if ( result < -1000 && result >= -10000) {
            return resultElement.style.color = 'rgb(87, 10, 10)';
        } else if (result < -10000 && result >= -1000000) {
            return resultElement.style.color = 'rgb(41, 3, 3)';
        }
        return result; 
    }
}


addition(num1, num2);
subtraction(num1, num2);
multiplication(num1, num2);
division(num1, num2);


// Масиви

function findMin(arr) {
    let min = arr[0];

    for (let elem of arr) {
        if (typeof elem === 'number' && (min === arr[0] || elem < min)) {
            min = elem;
        }
    }  
        const result = min;
        const resultElement = document.getElementById('min');
        resultElement.textContent = result;
        resultElement.style.color = result < 0 ? 'red':'green';
        if(result < 0 && result >= -10) {
            return resultElement.style.color = 'rgb(248, 96, 96)';
        } else if (result < -10 && result >= -100) {
            return resultElement.style.color = 'rgb(228, 26, 26)';
        } else if (result < -100 && result >= -1000) {
            return resultElement.style.color = 'rgb(140, 14, 14)';
        } else if ( result < -1000 && result >= -10000) {
            return resultElement.style.color = 'rgb(87, 10, 10)';
        } else if (result < -10000 && result >= -1000000) {
            return resultElement.style.color = 'rgb(41, 3, 3)';
        }
        return result; 
}


function findMax(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
     if(typeof arr[i] === 'number' && ( max === arr[0] || arr[i] > max)) {
      max = arr[i];
     }
}
    const result = max;
    const resultElement = document.getElementById('max');
    resultElement.textContent = result;
    resultElement.style.color = result < 0 ? 'red':'green';
    if(result < 0 && result >= -10) {
        return resultElement.style.color = 'rgb(248, 96, 96)';
    } else if (result < -10 && result >= -100) {
        return resultElement.style.color = 'rgb(228, 26, 26)';
    } else if (result < -100 && result >= -1000) {
        return resultElement.style.color = 'rgb(140, 14, 14)';
    } else if ( result < -1000 && result >= -10000) {
        return resultElement.style.color = 'rgb(87, 10, 10)';
    } else if (result < -10000 && result >= -1000000) {
        return resultElement.style.color = 'rgb(41, 3, 3)';
    }
    return result; 
}


findMin([12, 25, 7, 20, 'hello']);
findMax([12, 25, 7, 20, 'hello']);