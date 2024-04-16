/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// RISPOSTA
// 1) E' un ciclo for per stampare in console i numeri da 1 a 5
// 2) deve essere < 5 non >
// 3) non c'è logica


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// RISPOSTA
// 1) E' una funzione pura per verificare se i numeri sono pari. In caso lo siano aggiunge 5 a quel numero
// 2) si sono presenti errori di sintassi. La funzione andrebbe scritta così:
// function addIfEven(num) {
//     if (num % 2 === 0) {
//         num + 5;
//     }
//     return num;
// }
// 3) non sono presenti errori logici

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// RISPOSTA
// 1) E' una funzione che cicla fino a raggiungere il numero 5 e stampa in console l'indice iterato
// 2) Se la funzione deve raggiungere il numero 5 allora deve essere scritto <= 5. in questo modo la i andrà da 0 a 4
// 3) Non ci sono errori logici


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
// RISPOSTA
// 1) questa funzione deve copiare i numeri pari dall'array base in un nuovo array
// 2) - l'array numbers deve essere dichiarato con const
//    - l'array numbers deve essere dichiarato fuori dalla funzione
//    - l'array evenNumbers deve essere dichiarato con const
//    - l'array evenNumbers deve essere dichiarato fuori dalla funzione
//    - il ciclo for per scorrere tutti i numeri non deve avere -1 dopo numbers.length 
//    - manca almeno uno = nella condizione dell'if 
//    - il return non serve