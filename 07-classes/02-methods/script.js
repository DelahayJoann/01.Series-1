//07-classes/02-methods/script.js - 7.2: methods


(() => {
    class Person{
        constructor(first,last){
            this.firstname = first;
            this.lastname = last;
        }
        sayHello(){
            return `Hello, ${this.firstname} ${this.lastname}!`;
        }
    }
    document.getElementById('run').addEventListener('click', function(){
        let aPerson = new Person('Jean','Dupont');
        console.log(aPerson.sayHello());
    });
})();
