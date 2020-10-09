// 11-fetch/03-details/script.js - 11.3: details

(() => {
    let target = document.getElementById('target');
    var temp = document.getElementsByTagName("template")[0];
    
    document.getElementById('run').addEventListener('click', ()=>{

        fetch('http://localhost:3000/heroes/'+(document.getElementById('hero-id').value))
        .then(response => response.json())
        .then(data => {
                var clone = temp.content.cloneNode(true);
                clone.querySelector('.name').innerHTML = data.name;
                clone.querySelector('.alter-ego').innerHTML = data.alterEgo;
                clone.querySelector('.powers').innerHTML = data.abilities;
                target.appendChild(clone);
        });
    });
})();

