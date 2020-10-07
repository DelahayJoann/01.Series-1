// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {
    let target = document.getElementById('target');
    
    let currentText = target.innerHTML;
    target.innerHTML = '';

    let arrayCurrentText = currentText.match(/.{1,3}/g);

    for(elem of arrayCurrentText){
        target.appendChild(randomizeFont(elem));
    }


    function randomizeFont(word){
        let span = document.createElement('span');
        span.innerHTML = word;
        span.style.fontSize = Math.floor((Math.random() * 30) + 10)+"px";
        return span;
    }
})();
