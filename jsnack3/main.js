/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let number = 0;
for (let i = 0; i < 10; i++) {
 number += Number(prompt('scirvi un numero'))
}

console.log(number)