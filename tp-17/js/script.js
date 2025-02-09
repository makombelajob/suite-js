function choiceDegre() {
    let choixUser = Number(prompt("Choisir 1 (°F -> °C) ou 2 (°C -> °F) "));
    if ( choixUser === 1 ){
        let temperature = Number(prompt("Choisissez T° en °F "));
        let conversion = ( temperature - 32 ) * 5 / 9 ;
        console.log(`${temperature}°F en °C = ${conversion}`) ;
    }
    if ( choixUser === 2 ) {
        let temperature = Number(prompt("Choisissez T° en °C")) ;
        let conversion =  temperature * 9 / 5  + 32 ;
        console.log(`${temperature}°C en °F = ${conversion}`);
    }
}
choiceDegre();
