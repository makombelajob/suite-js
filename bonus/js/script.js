const table = document.querySelector("table");
const userSize = Number(prompt("Entrer une taille"));

for (let rows = 1; rows <= userSize; rows++) {
    // console.log(`${rows} x ${userSize} = ${rows*userSize}`);
    const ligne = document.createElement("tr");
    table.appendChild(ligne);
    
    for (let column = 1; column <= userSize; column++) {
        const colonne = document.createElement("td");
        colonne.textContent = rows * column;
        ligne.appendChild(colonne);
        colonne.style.border = "1px solid black";

        //la somme de l’index de ligne (rows) et de l’index de colonne (column) est égale à userSize + 1
        if (rows === column || rows + column === userSize + 1) {
            colonne.style.backgroundColor = "red";
        }
        const center = Math.ceil(userSize / 2); //pointer centrale exacte en cas userSize impair.
        if (column === center && rows === center) {
            colonne.style.backgroundColor = "green";
        }
    }
}

