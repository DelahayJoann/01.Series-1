// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal{
        static greeting = "Miaou";

        constructor(name){
            super();
            this.name = name;
        }
    }
    class Dog extends Animal{
        static greeting = "Waouf";

        constructor(name){
            super();
            this.name = name;
        }
    }

    document.getElementById('run').addEventListener('click', function(){
        console.log(new Cat('Kitty').sayHello());
        console.log(new Dog('Brutus').sayHello());
    });
})();
