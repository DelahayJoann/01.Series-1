// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    let i = 0;
    let target = document.getElementById('target');
    let text = target.innerHTML;
    target.innerHTML = '';
    let speed;

    typeWriter();

    function typeWriter() {
        if (i < text.length) {
            speed = Math.random()*100 +10;
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

})();
