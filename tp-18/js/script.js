const body = document.querySelector("body");
let size = Number(prompt("Enter a size"));
const table = document.querySelector("table");
body.appendChild(table);

for (let lines = 1; lines <= size; lines++){
    const line = document.createElement("tr");
    table.appendChild(line);
    table.style.border = "1px solid black";

    for ( let column = 1; column <= size; column++){
        const colon = document.createElement("td");
        line.appendChild(colon);
        colon.textContent = lines * column;
        
        if ( lines === column) {
            colon.style.backgroundColor = "red";
            colon.style.border = "1px solid black";
            colon.style.borderRadius = "5px";
        }
    }  
}