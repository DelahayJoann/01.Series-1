// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    var slider = document.getElementById("slider");
    var target = document.getElementById("target");
    target.innerHTML = slider.value;

    slider.oninput = function() {
        target.innerHTML = '0'+this.value;
    } 

})();
