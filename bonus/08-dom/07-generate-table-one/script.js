/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let tbl = document.createElement("table");
    for (let i =1;i<=10;i++){
        let col = document.createElement('tr');
        let row = document.createElement('td');
        tbl.appendChild(col);
        row.innerHTML='row '+i;
        col.appendChild(row);
    }
    let target = document.getElementById('target');
    target.appendChild(tbl);
    // your code here

})();
