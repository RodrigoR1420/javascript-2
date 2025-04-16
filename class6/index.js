const PI = 3.14159
let radius
let circunfrence

function Submit(){
    radius = document.getElementById('MyText').value 
    radius = Number(radius)
    circunfrence = 2 * PI * radius
    document.getElementById('MyH3').textContent = circunfrence
}