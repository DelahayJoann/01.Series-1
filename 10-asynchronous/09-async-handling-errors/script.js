// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    (() => {
        document.getElementById('run').addEventListener('click', async ()=>{
            try{
                console.log(await window.lib.getPersons());
            }
            catch(e){
                console.error(e);
            }
        });
    })();
})();
