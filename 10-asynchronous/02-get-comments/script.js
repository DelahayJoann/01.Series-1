// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    document.getElementById('run').addEventListener('click', ()=>{
        let artTable = [];
        
        window.lib.getPosts( async (err, articlesTable) =>{
            if(err){
                console.log(err);
            }

            for(article of articlesTable){
                window.lib.getComments(article.id, async (err, commentsTable) =>{
                    if(err){
                        console.log(err);
                    }
                    article.comments = await commentsTable;
                    console.log(article);
                });
            }
        });

    });

})();