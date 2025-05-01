const decrease = document.querySelector(".decreaseBtn")
const reset = document.querySelector(".resultBtn")
const increase = document.querySelector(".increaseBtn")
const result = document.querySelector("#CountLabel")
let count = 0

function Decrease(){
    count --
    result.textContent = count
}

function Increase(){
    count ++
    result.textContent = count
}

function Reset(){
    count = 0
    result.textContent = count
}

const subscribe = document.querySelector(".MyCheck")
const visa = document.querySelector(".Visa")
const mastercard = document.querySelector(".MasterCard")
const paypal = document.querySelector(".PayPal")
const subResult = document.querySelector(".ResultCheck")
const PaymentResult = document.querySelector(".ResultRadio")

function Submit(){
    if(subscribe.checked){
        subResult.textContent = `You are subscribed!`
    }
    else{
        subResult.textContent = `You are NOT subscribed!`
    }


    if(!visa.checked && !mastercard.checked && !paypal.checked){
        alert(`[ERROR] You must choose one way to do the payment`)
    }
    else if(visa.checked){
        PaymentResult.textContent = `You'll pay with Visa Card `
    }
    else if(mastercard.checked){
        PaymentResult.textContent = `You'll pay with MasterCard `
    }
    else{
        PaymentResult.textContent = `You'll pay with PayPal`
    }
}