// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {
    let inputToListen = document.getElementById('pass-one');
    let counter = document.getElementsByClassName('indicator')[0];
    inputToListen.setAttribute('maxlength','10');
    inputToListen.addEventListener('input', function () {
        counter.textContent = `${inputToListen.value.length}/10`;
    });
})();
