const MyText = document.querySelector("#MyText")
const result = document.querySelector("#result")
let age

function submit(){
    age = MyText.value
    age = Number(age)

    if(age == '' || isNaN(age) || age < 0){
        alert(`[ERRO] Please enter a NUMBER`)
    }
    else if(age >= 100){
        result.textContent = `you´re problably death`
    } 
    else if(age >= 70){
        result.textContent = `If you not dead, you're almost dead`
    }
    else if(age >= 35){
        result.textContent = `either you´re divorced and frustated, or you´re well and happy`
    }
    else if(age >= 25){
        result.textContent = `If you not rich yet and you haven´t found the woman of ur life, i really really wouldn´t want to be you`
    } 
    else if(age >=18){
        result.textContent = `You´re living the best phase of ur life`
    }
    else if(age >= 13){
        result.textContent = `Two options: either you´re a shit boring teen, or you´re like me cool and awsome `
    }
    else{
        result.textContent = `Get out of here, you´re just a kid`
    }
}