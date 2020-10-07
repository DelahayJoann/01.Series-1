// 09-misc/06-guess-number/script.js - 9.6: guess the number
(() => {

    window.addEventListener("DOMContentLoaded", (event) => {
        let numberToGuess = Math.trunc(Math.random()*100 +1);
        let count = 1;

        while((guess = new Number(Number.parseInt(prompt('Find number between 1 & 100: ')))) != numberToGuess){
            count++;
            if(guess < numberToGuess){
                alert('Higher!');
            }else{
                alert('Lower!');
            }
        }
        alert(`That's it! You found it in ${count} tries`);
      });
})();
