(() => {
    let target = document.getElementById('target');

    let heroes = document.createElement('li');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let name = document.createElement('strong');
    let alterEgo = document.createElement('em');
                        
    heroes.setAttribute('class','hero');
    h4.setAttribute('class','title');
    p.setAttribute('class','powers')
    name.setAttribute('class','name');
    alterEgo.setAttribute('class','alter-ego');

    h4.appendChild(name);
    h4.appendChild(alterEgo);
    heroes.appendChild(h4);
    heroes.appendChild(p);
    
    fetch('http://localhost:3000/heroes')
    .then(response => response.json())
    .then(data => {
        for(hero of data){
            name.innerHTML = data['name'];
            alterEgo.innerHTML = data['alterEgo'];
            p.innerHTML = data['abilities'];
        }
        target.appendChild(heroes);
    });


    

})();