// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    let psw1 = document.getElementById('pass-one');
    let psw2 = document.getElementById('pass-two');

    document.getElementById("run").addEventListener("click", () => {
          if(psw1.value !== psw2.value){
            psw1.setAttribute('class','error');
            psw2.setAttribute('class','error');
          }
    });

})();
