// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

        let source = document.getElementById('source');
        let target = document.getElementById('target');

        let img = document.createElement('img');
        img.src = source.getAttribute('data-image');

        target.appendChild(img);

        source.parentNode.removeChild(source);
})();