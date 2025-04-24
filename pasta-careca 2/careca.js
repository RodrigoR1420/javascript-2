const interacao = document.querySelector('#interacao')

interacao.addEventListener('click', click);
interacao.addEventListener('mouseenter', enter);
interacao.addEventListener('mouseout', out);

function click() {
    interacao.innerHTML = 'Clicked'
    interacao.style.font = 'bold 2em arial'
    interacao.style.backgroundColor = 'yellow'
}

function enter() {
    interacao.innerHTML = 'enter'
    interacao.style.font = 'bold 2em arial'
    interacao.style.backgroundColor = 'gold'
}

function out() {
    interacao.innerHTML = 'out'
    interacao.style.font = 'bold 2em arial'
    interacao.style.backgroundColor = 'goldenrod'
}


function contar(){
    const inicio = document.querySelector('#inicio')
    const fim = document.querySelector('#fim')
    const passo = document.querySelector('#passo')
    const res = document.querySelector('.res')
    
    if(inicio.value == 0 || fim.value == 0 || passo.value == ''){
        alert('[ERRO] Verifique os dados inseridos abaixo.')
    } else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        res.innerHTML = 'Contando:... <br>'

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
}
