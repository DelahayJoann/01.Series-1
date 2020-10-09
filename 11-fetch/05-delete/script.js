// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {

    let aNewHero = new Object();
    let last;

    document.getElementById('run').addEventListener('click', ()=>{
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", 'http://localhost:3000/heroes/'+document.getElementById('hero-id').value, true);
        
        xhr.send(null);

        fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });

    });
})();
