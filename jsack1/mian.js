/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstNumber = Number(prompt('inserisci il primo valore'))
const secondNumber = Number(prompt('inserisci il secondo valore'))

let bigNumber;

if (firstNumber > secondNumber) {
    bigNumber = firstNumber
} else if (secondNumber > firstNumber) {
    bigNumber = secondNumber
}

console.log(bigNumber)

