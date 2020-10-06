// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    document.querySelectorAll(".target").forEach( target => {
        target.innerHTML = "Owned!";
    });

})();
