// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {
    let b_increment = document.getElementById('increment');
    let target = document.getElementById('target');
    let counter = Number.parseInt(localStorage.getItem("counter")) || 0;
    target.innerHTML = counter;

    b_increment.addEventListener('click', ()=>{
        counter++;
        localStorage.setItem("counter", counter);
        target.innerHTML = counter;
    });
})();
