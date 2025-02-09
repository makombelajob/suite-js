function devinerNombre() {
    const randomNombre = Math.floor(Math.random() * 10) + 1 ;
    let userGuess = null ;

    while (userGuess !== randomNombre) {
        let userNombre = Number(prompt("Devinez"));

        if (userNombre <= 0 || userNombre > 100 || isNaN(userNombre)) {
            console.log("Entrer un N° valid ");
            continue;
        }
        userGuess = userNombre ;
        if (userGuess < randomNombre) {
            console.log(`${userGuess} est trop petit`);
        }
        if (userGuess > randomNombre) {
            console.log(`${userGuess} est trop grand`);
        } else {
            console.log(`Bravo !`)
        }
    }
}
devinerNombre();