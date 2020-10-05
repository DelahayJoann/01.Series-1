
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    document.addEventListener("DOMContentLoaded", function() {
        let theDate = new Date();
        document.getElementById('target').innerHTML = (theDate.getHours() < 18)? 'Hello': 'Good evening';
    });

})();