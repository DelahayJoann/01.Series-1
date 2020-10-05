
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
    function count13(year) {
        var count = 0;
        for (var month=0; month<12; month++) {
            var theDate = new Date(year,month,13);
            if(theDate.getDay() == 5){count++;}
        }
        return count;                            
    }
    document.getElementById("run").addEventListener("click", function() {
        alert(count13(Number.parseInt(document.getElementById('year').value)));
    });
})();
