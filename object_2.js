const user = {
    name: prompt('Як тебе звати?'),
    age: prompt('Скільки тобі років?', 0),
    sayHello() {
        if(this.age % 100 >= 5 && this.age % 100 <= 20) {
            alert(message = `Привіт, я ${this.name}, мені ${this.age} років`);
        } else {
             if (this.age % 10 == 1) {
                alert(message = `Привіт, я ${this.name}, мені ${this.age} рік`);
             } else if ( this.age % 10 >= 2 && this.age % 10 <= 4) {
                alert(message = `Привіт, я ${this.name}, мені ${this.age} роки`);
             } else {
                alert(message = `Привіт, я ${this.name}, мені ${this.age} років`)
             }
        }
    }
}

user.sayHello();