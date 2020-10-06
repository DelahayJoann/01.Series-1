// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class Person{
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        getName(){
            return `${this.firstname} ${this.lastname}`;
        }
        setName(fullname){
            this.firstname = fullname.split(' ')[0];
            this.lastname = fullname.split(' ')[1];
        }
    }

    document.getElementById('run').addEventListener('click', ()=>{
        let aPerson = new Person('Jean','Dupont');
        console.log(aPerson.getName());
        aPerson.setName('Marcel Godin');
        console.log(aPerson.getName());
    });
})();
