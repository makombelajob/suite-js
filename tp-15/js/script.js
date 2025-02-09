let phrase = prompt("Entrer une phrase : ").toLowerCase();
function compterVoyalles(phrase){
    let voyelles = phrase.match(/[aeiouy]/gi); 
    return voyelles ? voyelles.length : 0 ;
}
console.log(`Nombre des voyelles est : ${compterVoyalles(phrase)}`);

//**
// g (global) pour chercher toutes les occurrences.
//i (insensible à la casse) pour prendre en compte les majuscules et les voyelles
//  */