
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {
    document.addEventListener("DOMContentLoaded", function() {
        let theDate = new Date();
        (((theDate.getHours()*60)+theDate.getMinutes()) < 1050)? document.getElementById('target').innerHTML = 'Hello' : document.getElementById('target').innerHTML = 'Good evening';
    });
})();
