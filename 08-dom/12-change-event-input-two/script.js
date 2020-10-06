// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {
    let pattern = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
    let inputToListen = document.getElementById('pass-one');
    let valide = document.getElementsByClassName('indicator')[0];

    inputToListen.addEventListener('input', function () {
        if(pattern.test(inputToListen.value)){
            valide.innerHTML = 'ok';
        }else{
            valide.innerHTML = 'not ok'
        }
    });
})();
