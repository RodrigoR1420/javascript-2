const MyButton = document.querySelector('#MyButton')
const label1 = document.querySelector('#MyLabel')
const label2 = document.querySelector('#MyLabel2')
const label3 = document.querySelector('#MyLabel3')
const min = 1
const max = 6
let randomNum1
let randomNum2
let randomNum3

function Roll(){
    randomNum1 = Math.floor(Math.random() * max) + min
    randomNum2 = Math.floor(Math.random() * max) + min
    randomNum3 = Math.floor(Math.random() * max) + min
    label1.textContent = randomNum1
    label2.textContent = randomNum2
    label3.textContent = randomNum3
}