let nombre = prompt("Entrer un nombre :");
function  compterNombre(){
    let somme = 0;
    let compter = nombre;
    for ( let compte of compter){
        somme += Number(compte);
    }
    return somme;
}
console.log(`Le compte du nombre est ${compterNombre()}`);