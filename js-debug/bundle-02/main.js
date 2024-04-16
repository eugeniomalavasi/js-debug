/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
// RISPOSTA
// 1) funzione per determinare se un numero in input è < di 18
// 2) bisogna dichiare myAge e message come let in quanto cambiano ogni volta. message va messo al di fuori della funzione in modo da avere il suo contenuto disponibile al di fuori della funzione
// 3) il fatto che myAge non sia passato come argomento nella funzione e che sia dichiarato come const all'interno della funzione stessa, rende l'algoritmo inutile

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
// RISPOSTA
// 1) funzione per stampare il numero di elementi presenti nell'array
// 2) non ci sono errori sintattici
// 3) per determinare la lunghezza di un array è necessario fare un ciclo for, quindi richiamando ${colors.lenght} otteniamo undefined

// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// RISPOSTA
// 1) funzione per sommare 12 ad un numero input dell'utente
// 2) non sono presenti controlli in input, perciò un utente potrebbe inserire anche delle stringhe. E' necessario fare un parseInt per avere un numero, altrimenti avremo la somma fra una stringa e un numero
// 3) non sono presenti errori logici

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// RISPOSTA
// 1) funzione che controlla email input e se è uguale ad una stringa dell'array delle email stampa in console accesso consentito o accesso negato se la mail input != da quelle presenti 
// 2) if (grantAccess === "true")
// 3) è logicamente corretto

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();
// RISPOSTA
// 1) funzione che controlla se email input è presente in un array di email. 
// 2) manca una } alla fine
// 3) 



























