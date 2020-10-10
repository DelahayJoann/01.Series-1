//06-objects/02-assign-properties/script.js - 6.2: assign properties


(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };

    let theComputers = computers; // Copie du tableau d'Object computers (car const)
    let temp = {}; // Variable Object qui servira à récupérer l'Object defaultProps qui est également const.

    document.getElementById('run').addEventListener('click', function(){
        for(object of theComputers){ // Je fais une boucle sur chacun des éléments (object en minuscule) du tableau theComputers (qui est une copie de computers) 
            Object.assign(temp,defaultProps); // La fonction static Object.assign() copie les propriétés du 2ème élément de la parenthèse sur le premier mais n'écrase pas celles que lui ne possèdent pas.
            Object.assign(temp, object); // J'assigne le contenu de object qui correspond à un élément du tableau theComputers sur ma variable temp qui contient les éléments de defaultProps et donc il remplacera ce que lui possède seulement et n'écrasera pas les propriétés que lui ne possède pas.
            Object.assign(object,temp); // Maintenant que temp contient ses propriétés de base + celle remplacé par les propriétés que object avait, je recopie temps sur object pour lui donner le résultat de la "fusion"
        }
        for(elem of theComputers) console.log(JSON.stringify(elem)); // J'affiche chacun des éléments, maintenant modifié par la boucle précédente, qui se trouve dans theComputers.
    });
})();
