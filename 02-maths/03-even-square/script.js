
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let array=[];
        for (i=1;i<Math.sqrt(22);i++){
            array.push(i ** 2);
        }
        alert(array);
        
    });

})();
