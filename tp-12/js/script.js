let year = Number(prompt("Entrez une année :"));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} : est une année bissextile`);
} else {
    console.log(`${year} : n'est pas une année bissextile`);
}
    