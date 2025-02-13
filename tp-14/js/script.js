/**
 * 📌 Si l'utilisateur entre "7", alors nombre = 7.
📌 Pourquoi ?
Un nombre premier est un entier strictement supérieur à 1 qui n’a que deux diviseurs : 1 et lui-même.
👉 Cas particuliers :
0 et 1 ne sont pas premiers → On affiche directement le message.
Les nombres négatifs ne sont jamais premiers.
'estPremier' est une variable booléenne (true ou false) qui indique si le nombre est premier.
🔹 Par défaut, on suppose qu'il est premier (true), mais on va le tester.
On teste tous les nombres 'debut' de 2 jusqu'à nombre - 1
Si 'nombre % debut === 0', cela signifie que nombre est divisible par 'debut', donc ce n'est pas un nombre premier.
Si on trouve un diviseur ('debut'), on met 'estPremier = false' et on sort de la boucle avec 'break'.
Pourquoi 'break' ? Une fois qu'on sait qu'un nombre n'est pas premier, inutile de continuer la boucle.
Résultat : "7 est un nombre premier" ✅.
 On trouve un diviseur (2) immédiatement.
🔹 On met estPremier = false et on quitte la boucle avec break.
🔹 Résultat : "8 n'est pas un nombre premier" ❌.
📌 Après la boucle :
Si estPremier === true, on affiche que le nombre est premier.
Sinon, il n'est pas premier.
On peut optimiser l'algorithme en testant jusqu'à la racine carrée de nombre (Math.sqrt(nombre)).
👉 Pourquoi ? Si n a un diviseur supérieur à sa racine carrée, alors il a forcément un autre diviseur inférieur !
✅ Cet algorithme est beaucoup plus rapide pour de grands nombres ! 🚀

💡 Résumé Final
1️⃣ On demande un nombre et on le convertit en Number.
2️⃣ Si nombre ≤ 1, il n'est pas premier.
3️⃣ On suppose qu'il est premier (estPremier = true).
4️⃣ On teste sa divisibilité en divisant par 2 jusqu'à nombre - 1 (ou Math.sqrt(nombre)).
5️⃣ Si un diviseur est trouvé, ce n'est pas un nombre premier.
6️⃣ On affiche le résultat ("est un nombre premier" ou "n'est pas un nombre premier").
 */












function nombrePremier() {
    let nombre = Number(prompt("Entrer un nombre"));
    let estPremier = true;
    if (nombre <= 1) {
        console.log(`${nombre} n'est pas premier`);
    } else {
        for (let debut = 2; debut <= Math.sqrt(nombre); debut++) {
            if (nombre % debut === 0) {
                estPremier = false;
                break;
            }
        }
    }
    if (estPremier) {
        console.log(`${nombre} est premier`)
    } else {
        console.log(`${nombre} n'est pas premier`);
    }
}
nombrePremier();
