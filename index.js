const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let BoxOne = document.querySelector('.passwordgeneratorOne')
let BoxTwo = document.querySelector('.passwordgeneratorTwo')
let isAlive = false



function randomNumber() {
    let passOne = Math.floor(Math.random() * characters.length)
    return characters[passOne]





}
function passwordGen() {
    PasswordOne()
    PasswordTwo()
}



function PasswordOne() {
    isAlive = true
    let randomPasswordOne = ''
    if (isAlive === true) {
        for (i = 0; i < 15; i++) {
            BoxOne.textContent = randomPasswordOne += randomNumber()
        }
    }

}

function PasswordTwo() {
    isAlive = true
    let randomPasswordTwo = ''
    if (isAlive === true) {
        for (i = 0; i < 15; i++) {
            BoxTwo.textContent = randomPasswordTwo += randomNumber()
        }
    }

}