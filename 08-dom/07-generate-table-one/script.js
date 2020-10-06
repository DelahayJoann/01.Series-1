// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {
    let target = document.getElementById('target');

    let table = document.createElement('table');

    table.style.width = '50%';
    table.style.border = '1px solid black';
    

    for(i=0;i<10;i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        tr.appendChild(td);
        table.appendChild(tr);
    }
    target.appendChild(table);
})();
