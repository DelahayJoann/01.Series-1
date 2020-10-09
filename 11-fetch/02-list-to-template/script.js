(() => {
    let target = document.getElementById('target');
    var temp = document.getElementsByTagName("template")[0]; 
    
    document.getElementById('run').addEventListener('click', ()=>{
        fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(data => {
            for(hero of data){
                var clone = temp.content.cloneNode(true);
                clone.querySelector('.name').innerHTML = hero.name;
                clone.querySelector('.alter-ego').innerHTML = hero.alterEgo;
                clone.querySelector('.powers').innerHTML = hero.abilities;
                target.appendChild(clone);
            }
        });
    });
})();