
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let array=[];
        for (i=1;i<22;i++){
            (Math.sqrt(i) == Math.round(Math.sqrt(i)))? array.push(i):'';
        }
        alert(array);   
    });

})();
