//Essa bloco é para testar funções sozinhas sem interferir no código principal

const readline = require('readline/promises');
const { stdin, stdout } = require('process');

async function executar() {
    const rl = readline.createInterface({ input: stdin, output: stdout });
   console.log('Exercício 3')

    resposta = (await rl.question('Digite o inicio: ')).trim();

    while (resposta === '' || !Number.isInteger(Number(resposta)) || resposta < 0) {
    console.log('Digite um número positivo e inteiro!');
    resposta = (await rl.question('Insira o número novamente: ')).trim();
    }

    inicio = Number(resposta);

    resposta = (await rl.question('Digite o fim: ')).trim();
     while (resposta === '' || !Number.isInteger(Number(resposta)) || resposta < 0) {
    console.log('Digite um número positivo e inteiro!');
    resposta = (await rl.question('Insira o número novamente: ')).trim();
    }
    fim = Number(resposta);

    let soma = 0;
    if(inicio < fim){
    for(inicio; inicio <= fim; inicio++) {
        if(inicio % 2 !== 0){
            soma += inicio;
        }
        console.log(inicio);
    }
    console.log(soma);
}else{
    for(fim; fim <= inicio; inicio--) {
        if(inicio % 2 !== 0){
            soma += inicio;
        }
        console.log(inicio);
    }
    console.log(soma);
} 
}

executar();