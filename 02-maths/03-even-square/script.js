
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let array=[];
        let text;
        for (i=1;i<22;i++){
            array.push(Math.sqrt(i));
        }
        
        alert(array);
        
    });

})();
