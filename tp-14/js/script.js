function estPremier(){
    let nombre = Number(prompt("Entrer un nombre : "));
    if (nombre <= 1){
        console.log("O et 1 ne sont pas premier");
    }
    for ( let divise = 2 ; divise <= Math.sqrt(nombre); divise++){
        if (nombre % divise === 0){
            return false;
        }
    }
    return true;
}
estPremier();