
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    function factorial(a){
        return (a == 0)? 1 : a * factorial(a-1);
    }
    

    document.getElementById("run").addEventListener("click", () => {
        alert(factorial(Number.parseInt(document.getElementById('number').value)));
    });

})();
