const table = document.querySelector("table");
table.textContent = "";

const userSize = Number(prompt("Choisir un nombre"));
if (isNaN(userSize) || userSize <= 2 || !isInteger(userSize)) {
    alert("Numéro non valid")
} else {
    for (rows = 1; rows <= userSize; rows++) {
        const trs = document.createElement("tr");
        table.appendChild(trs);

        for (column = 1; column <= userSize; column++) {
            const tds = document.createElement("td");
            tds.textContent = column * rows;
            trs.appendChild(tds);

            if (rows === column || rows + column === userSize + 1) {
                tds.classList = "diagonal"
            }

        }
    }
}





