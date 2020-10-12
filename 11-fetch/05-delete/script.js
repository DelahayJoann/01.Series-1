// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {

    let aNewHero = new Object();

    document.getElementById('run').addEventListener('click', ()=>{
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", 'http://localhost:3000/heroes/'+document.getElementById('hero-id').value, true);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                fetch('http://localhost:3000/heroes')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
            }
          };      
    });
})();