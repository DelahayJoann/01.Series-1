// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    let temp = [];
    document.getElementById('run').addEventListener('click', function(){
        keys.forEach((item,index) =>{
            temp.push([item,values[index]]);
        });
        const object = Object.fromEntries(temp);
        console.log(object);
    });
    
})();
