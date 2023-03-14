/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstWord = prompt('scirivi una parola')
const secondWord = prompt('scirivi un\'altra parola')

if (firstWord.length < secondWord.length) {
    console.log(firstWord)
    console.log(secondWord)
} else if ( firstWord.length > secondWord.length ) {
    console.log(secondWord)
    console.log(firstWord)
} else {
    console.log('le parole hanno la stessa lunghezza')
}