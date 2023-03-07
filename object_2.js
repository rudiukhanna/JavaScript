const user = {
    name: 'Ганна',
    age: 32,
    sayHello() {
        console.log('Привіт, я ' + this.name + ', ' + 'мені ' + this.age + ' роки.');
    },
}

user.sayHello();