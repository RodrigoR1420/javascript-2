const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu nome: ', function(nome){
    let name = nome.trim().charAt(0).toUpperCase() + nome.trim().slice(1).toLowerCase();
    console.log(`Olá ${name}!`);
    rl.close();
})