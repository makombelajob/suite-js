
let phrase = prompt("Entrez une phrase : ").toLowerCase();
let voyelles = phrase.match(/[aeiouy]/gi); // g (global)chercher les occurrences => i insensible à la casse.
let nombreVoyelles = 0 ;
if (voyelles) {
    nombreVoyelles = voyelles.length;
} else {
    nombreVoyelles = 0;
}
// let nombreVoyelles = voyelles ? voyelles.length : 0;
console.log(`Le nombre de voyelles est : ${nombreVoyelles}`);
