// Prendi gli elementi dal DOM
// Crea le variabili necessarie
// Crea la funzione per trovare tot numeri random
// Fai partire il timer di tot secondi
// Al termine del timer i numeri random scompaiono
// Fai comparire un form dove inserire i numeri di prima
// Controlla se e quanti numeri sono giusti
// Stampa il risultato in pagina



// Prendi gli elementi dal DOM
const randomNumberElement = document.querySelectorAll('.random-number');
const form = document.querySelector('form');
const numberInput = document.querySelectorAll('.number');


// Crea le variabili necessarie
const difficulty = 99;


// Crea la funzione per trovare tot numeri random
const generateRandomNumber = (difficulty) => {
    let randomNumbers = []
    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor((Math.random() * difficulty) + 1);
        if (randomNumbers.includes(randomNumber)) {
            i--;
        } else {
            randomNumbers.push(randomNumber);
        }
    }
    console.log(randomNumbers)
}

generateRandomNumber(difficulty)