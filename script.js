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
const randomNumberElement = document.querySelectorAll('.random-number');
const form = document.querySelector('form');
const userInputs = document.querySelectorAll('.user-number');
const buttonElement = document.querySelector('button');
const userInputsId = document.getElementById('user-number');



// Crea le variabili necessarie
const difficulty = 99;
let second = 1;
let randomNumbers = []
let userInput = 0;


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




// Fai partire il timer di tot secondi
const interval = setInterval(() => {

    // Fai partire il timer
    // Quando scade...
    if (second === 0) {

        // Blocca il timer
        clearInterval(interval);

        // Crea i numeri random
        // generateRandomNumber(difficulty);
        generateRandomNumber(difficulty)
        // randomNumbers = [1, 5, 9, 8, 3]

        // Aggiungi e rimuovi le classi necessarie
        randomNumbersElement.classList.add('d-none');
        secondElement.classList.add('d-none')
        form.classList.remove('d-none')

        // Controlla se l'input dello user è lo stesso del numero random
        // buttonElement.addEventListener('click', function(){
        //     for (let i = 0; i < 5; i++) {
        //         if (randomNumbers.includes(userInput[i])) {
        //         console.log('true');
        //         } else {
        //             console.log('false');
        //         }
        //     }
        // })

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

        if (randomNumbers.includes(userInput)) {
            console.log('true');
          } else {
            console.log('false');
          }
    }
})


   
// for (let i = 0; i < userInputs.length; i++) {
//     buttonElement.addEventListener('form', (event) => {
//         event.preventDefault();

//         userInput = userInputs[i].value;
//         checkNumber (randomNumbers, userInput)
//     })
// }