
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here

    document.getElementById("run").addEventListener("click", function() {
        let year = document.getElementById("dob-year");
        let month = document.getElementById("dob-month");
        let day = document.getElementById("dob-day");
        let enterDate = new Date(Number.parseInt(year.options[year.selectedIndex].value), Number.parseInt(month.options[month.selectedIndex].value), Number.parseInt(day.options[day.selectedIndex].value));
        alert(`You are ${Age(enterDate)} years old`);
    });

    function Age(dob) {
        var dif = Date.now() - dob;
        var theDate = new Date(dif);
        return Math.abs(theDate.getUTCFullYear() - 1970);
      }
})();
