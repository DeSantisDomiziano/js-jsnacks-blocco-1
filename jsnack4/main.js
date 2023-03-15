const guest = [
    'mario',
    'marco',
    'gianni',
    'giorgio',
];

let nameGuest = prompt('come ti chiami?')
let isCheckGuest = false
/* for (let i = 0; i < guest.length; i++) {
    if ( guest[i] === nameGuest) {
        isCheckGuest = true
    }
} */
let i = 0
while (i < guest.length) {
    if ( guest[i] === nameGuest) {
        isCheckGuest = true
    }
    i++
}

if (isCheckGuest) {
    alert('sei dei nostri')
} else {
    alert('vai via!')
}