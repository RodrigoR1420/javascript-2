const increaseBtn = document.querySelector('#increaseBtn')
const resetBtn = document.querySelector('#resetBtn')
const decreaseBtn = document.querySelector('#decreaseBtn')
const countLabel = document.querySelector('#count-Label')
let count = 0

function increase(){
    count++
    countLabel.textContent = count
}

function decrease(){
    count--
    countLabel.textContent = count
}

function reset(){
    count = 0
    countLabel.textContent = count
}