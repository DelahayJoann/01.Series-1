// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {
    let target = document.getElementById('target');

    let table = document.createElement('table');

    table.style.width = '50%';
    table.style.border = '1px solid black';

    for(i=0;i<10;i++){
        let tr = document.createElement('tr');
        for(j=0;j<10;j++){
            let td = document.createElement('td');
            td.innerHTML = (j+1)*(i+1);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    target.appendChild(table);
})();
