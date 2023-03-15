/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

let number = []

for(let i = 0; i < 6; i++) {
    const numberPrompt = Number(prompt('metti un numero'))

    if (numberPrompt % 2 != 0) {
        number.push(numberPrompt)
    }
}

console.log(number)