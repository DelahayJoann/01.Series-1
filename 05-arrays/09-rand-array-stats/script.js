// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
    document.getElementById('run').addEventListener('click', function(){
        let min = 101;
        let max = 0;
        let sum = 0;
        let arrayOfn = document.querySelectorAll('[id^="n-"]');
        for(elem of arrayOfn){
            elem.innerHTML = Math.trunc((Math.random()*100)+1);
            sum += Number.parseInt(elem.innerHTML);
            (Number.parseInt(elem.innerHTML) < min)? min = Number.parseInt(elem.innerHTML):'';
            (Number.parseInt(elem.innerHTML) > max)? max = Number.parseInt(elem.innerHTML):'';
        }
        document.getElementById('min').innerHTML = min;
        document.getElementById('max').innerHTML = max;
        document.getElementById('sum').innerHTML = sum;
        document.getElementById('average').innerHTML = sum / arrayOfn.length;
    });
})();
