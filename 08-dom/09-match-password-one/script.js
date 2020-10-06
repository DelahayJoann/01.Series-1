// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    let psw1 = document.getElementById('pass-one');
    let psw2 = document.getElementById('pass-two');

    document.getElementById("run").addEventListener("click", () => {
          if(psw1.value !== psw2.value){
            psw1.style.border = '3px solid red';
            psw2.style.border = '3px solid red';
          }
    });

})();
