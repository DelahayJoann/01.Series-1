// 11-fetch/04-add/script.js - 11.4: ajouter un élément

(() => {

    let aNewHero = new Object();
    let last;

    document.getElementById('run').addEventListener('click', ()=>{
      if(   document.getElementById('hero-name').value &&
            document.getElementById('hero-alter-ego').value &&
            document.getElementById('hero-powers').value
        ){

        fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(data => {
            last = data[ Object.keys(data).pop() ];
            aNewHero.id = last.id +1;
            aNewHero.name = document.getElementById('hero-name').value;
            aNewHero.alterEgo = document.getElementById('hero-alter-ego').value;
            aNewHero.abilities = document.getElementById('hero-powers').value.split(',');
        }).then(()=>{
            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'http://localhost:3000/heroes',true);
            xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
            let data = JSON.stringify(aNewHero, null, 4);

            xhr.send(data);

            console.log(data);
        });
      }else(alert("Enter something in each field")) 
    });
})();