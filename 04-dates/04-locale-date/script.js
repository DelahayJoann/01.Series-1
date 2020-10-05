
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let theDate = new Date(Date.now());
    document.getElementById('target').innerHTML = theDate.toLocaleString('en-UK',{weekday: 'long', day: 'numeric', year: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'});

})();
