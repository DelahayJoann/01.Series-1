// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {

    document.getElementById('run').addEventListener('click', ()=>{
        
        window.lib.getPersons((err, personsTable) =>{
            if(err){
                console.error(err);
            }else{
                console.log(personsTable);
            }
        });
    });
    
})();
