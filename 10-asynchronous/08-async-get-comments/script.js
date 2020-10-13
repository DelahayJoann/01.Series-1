// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    document.getElementById('run').addEventListener('click', async ()=>{
        let tabArts = await window.lib.getPosts();
        await Promise.all(tabArts.map(async (article) => {
            let tabcomms = await window.lib.getComments(article.id);
            article.comments = tabcomms;
        }));
        console.log(tabArts);
    });
})();