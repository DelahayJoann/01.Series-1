// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    document.getElementById('run').addEventListener('click', function(){
        let arrayOfn = document.querySelectorAll('[id^="n-"]');
        for(elem of arrayOfn){
            elem.innerHTML = Math.trunc((Math.random()*100)+1);
        }

    });
})();
