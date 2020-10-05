
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    document.getElementById("run").addEventListener("click", function() {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#'+randColor();
    });

    function randColor(){
        return randHexaNum = Math.trunc((Math.random()*16777215) +1).toString(16);
    }

})();
