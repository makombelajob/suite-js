function noteFinale() {
    function demanderNotes(message) {
        return Number(prompt(message));
    }
    let noteOne = demanderNotes("Entrer la noteOne : ");
    let noteTwo = demanderNotes("Entrer la noteTwo : ");
    let noteThree = demanderNotes("Entrer la noteThree : ");
    let moyenne = (noteOne + noteTwo + noteThree) / 3 ;
    console.log(`Voici la moyenne des 3 notes : ${moyenne}`);
}

noteFinale();
