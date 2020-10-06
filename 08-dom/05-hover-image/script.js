// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

var image = document.querySelector('img');
let normal = image.src;
let hover = image.getAttribute('data-hover');

image.onmouseover = function() {  image.src = hover;  }
image.onmouseout = function() {  image.src = normal; }

})();
