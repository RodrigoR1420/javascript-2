const dec = document.querySelector('#decrease1')
const res = document.querySelector('#reset2')
const inc = document.querySelector('#increase3')
const MyLbl= document.querySelector('#MyLabel')
let count = 0

function decrease(){
    count--;
    mylabel2();
}

function reset(){
    count = 0;
    mylabel2();
}

function increase(){
    count++;
    mylabel2();
}
 




















function mylabel2(){
    MyLbl.textContent = count;
}