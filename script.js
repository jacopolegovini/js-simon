// Prendi gli elementi dal DOM
// Crea le variabili necessarie
// Crea la funzione per trovare tot numeri random
// Fai partire il timer di tot secondi
// Al termine del timer i numeri random scompaiono
// Fai comparire un form dove inserire i numeri di prima
// Controlla se e quanti numeri sono giusti
// Stampa il risultato in pagina



// Prendi gli elementi dal DOM
const secondElement = document.querySelector('.second');
const randomNumbersElement = document.querySelector('.random-numbers');
const form = document.querySelector('form');
const userInputs = document.querySelectorAll('.user-number');
const buttonElement = document.querySelector('button');
const userInputsId = document.getElementById('user-number');
const resultElement = document.querySelector('p');
const h1Element = document.querySelector('h1');


// Crea le variabili necessarie
const difficulty = 99;
let second = 10;
let randomNumbers = []
let userInput = 0;
let result = 0;
let numberWord = 'numeri'
let sentence = 'Sono stati individuati'


// Crea le funzioni necessarie
// Crea la funzione per trovare tot numeri random
const generateRandomNumber = difficulty => {
    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor((Math.random() * difficulty) + 1);
        if (randomNumbers.includes(randomNumber)) {
            i--;
        } else {
            randomNumbers.push(randomNumber);
        }
    }
    console.log(randomNumbers)
    return randomNumbers;
}

// Crea la funzione per verificare che i numeri inseriti dall'utente siano gli stessi di quelli prodotti randomicamente
// ! Come mai non funziona?
const checkNumber = (randomNumbers, userInputs) => {
    console.log(randomNumbers)
    
    for (let i = 0; i < 5; i++) {

        if (randomNumbers.includes(userInputs[i])) {
        console.log('true');
      } else {
        console.log('false');
      }
    }
}



// Crea i numeri random
generateRandomNumber(difficulty)

// Stampa in pagina i numeri random con un ciclo
for (let i = 0; i < 5; i++) {
    randomNumbersElement.innerHTML += `<div class="random-number">${randomNumbers[i]}</div>`
}

// Fai partire il timer di tot secondi
const interval = setInterval(() => {

    // Fai partire il timer
    // Quando scade...
    if (second === 0) {

        // Blocca il timer
        clearInterval(interval);

        // Aggiungi e rimuovi le classi necessarie
        randomNumbersElement.classList.add('d-none');
        secondElement.classList.add('d-none');
        form.classList.remove('d-none');
        form.classList.add('form-flex');
        h1Element.classList.add('d-none');

    } else {
        console.log(second--)
        secondElement.innerHTML = second;
    }
}, 1000)

// Crea l'evento sul bottone una volta che lo user ha compilato i campi
buttonElement.addEventListener('click', function(event){
    event.preventDefault()

    // Controlla se l'input inserito è uguale al randomnumber
    for (let i = 0; i < userInputs.length; i++) {
        userInput = parseInt(userInputs[i].value)
        
        // TODO Validazione


        console.log(randomNumbers)

        if (randomNumbers.includes(userInput)) {
            console.log('true');
            result++;
          } else {
            console.log('false');
          }
    }

    // Stampa un messaggio con quanti numeri sono stati individuati
    if (result === 1) {
        numberWord = 'numero'
        sentence = 'È stato individuato'
    }
    resultElement.innerHTML = `${sentence} ${result} ${numberWord}.<br> `
})


   
// for (let i = 0; i < userInputs.length; i++) {
//     buttonElement.addEventListener('form', (event) => {
//         event.preventDefault();

//         userInput = userInputs[i].value;
//         checkNumber (randomNumbers, userInput)
//     })
// }