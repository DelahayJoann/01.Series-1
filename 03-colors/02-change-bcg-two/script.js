
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    document.getElementById("run").addEventListener("click", function() {
        document.getElementsByTagName('body')[0].style.backgroundColor = document.getElementById('color').value;
    });

})();
