
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    do{
        let age = prompt('Your age? ');
        let gender = prompt('Your gender? ');
        let city = prompt('Your city? ');
        (confirm(`You are ${age} years old, you are a ${gender} and you live in ${city}?`))? confirmed = true : confirmed = false;

    }while(!confirmed)
})();
