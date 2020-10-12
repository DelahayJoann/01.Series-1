// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires

(() => {

    document.getElementById('run').addEventListener('click', ()=>{
        
        window.lib.getPosts((err, articlesTable) =>{
            if(err){
                console.log(err);
            }
            for (let i = 0, p = Promise.resolve(); i < articlesTable.length; i++) {
                p = p.then(_ => new Promise(resolve =>
                    setTimeout(function () {
                        window.lib.getComments(articlesTable[i].id,(err,comm)=>{
                            articlesTable[i].comments = comm;
                            console.log(articlesTable[i]);
                        })
                        resolve();
                    }, 300)
            ))};
        });
    });  
})();
