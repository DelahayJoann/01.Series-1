// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    document.getElementById('run').addEventListener('click', ()=>{
        window.lib.getPosts()
        .then((articles)=>{
            for (let i = 0, p = Promise.resolve(); i < articles.length; i++) {
                p = p.then(_ => new Promise(resolve =>
                    setTimeout(function () {
                        window.lib.getComments(articles[i].id).then((comments)=>{articles[i].comments = comments;console.log(articles[i])});
                        resolve();
                    }, 100)
            ))};   
        })
        .catch(console.error);
    });
})();