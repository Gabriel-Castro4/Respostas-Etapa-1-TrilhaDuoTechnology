//Essa bloco é para testar funções sozinhas sem interferir no código principal

const readline = require('readline/promises');
const { stdin, stdout } = require('process');

async function executar() {
    const rl = readline.createInterface({ input: stdin, output: stdout });


    console.log('Exercício 1')
    let resposta = (await rl.question('Digite um número: ')).trim();

    while (resposta === '' || !Number.isInteger(Number(resposta))) {
    console.log('Número inválido!');
    resposta = (await rl.question('Insira o número novamente: ')).trim();
}

let limite = Number(resposta);
    
    //São apenas divididos por 1 eles mesmos
    //Esse primeiro for é o contador 
    for (let contador = 2; contador <= limite; contador++) {
        let ePrimo = true;

        for (let i = 2; i * i <= contador; i++) {
            if (contador % i === 0) {
                ePrimo = false;
                break;
            }
        }

        if(ePrimo) {
            console.log(contador)
        }
    }
    console.log('-------------------------------')
    console.log('Exercício 2')
    resposta = (await rl.question('Digite um número: ')).trim();

    while (resposta === '' || !Number.isInteger(Number(resposta))) {
    console.log('Número inválido!');
    resposta = (await rl.question('Insira o número novamente: ')).trim();
}

    let numeroFatorar = Number(resposta);


    let aux = numeroFatorar;
    let exibirFatorial = numeroFatorar + ' x ';

    for (let i = (numeroFatorar - 1); i > 0; i--) {
        //Puramente Visual, monta a visbilidade da expressão no terminal
        if (i === 1) {
            exibirFatorial += i;
        } else {
             exibirFatorial += i + ' x ';
        }
        //Lógica do calculo fatorial
        numeroFatorar *= i;
    }
    console.log(aux + '! = ' + exibirFatorial + ' = ' + numeroFatorar);

    console.log('-------------------------------')
    console.log('Exercício 3')

    resposta = (await rl.question('Digite o inicio: ')).trim();

    while (resposta === '' || !Number.isInteger(Number(resposta)) || resposta < 0) {
    console.log('Número inválido!');
    resposta = (await rl.question('Insira o início novamente: ')).trim();
    }

    inicio = Number(resposta);

    resposta = (await rl.question('Digite o fim: ')).trim();
     while (resposta === '' || !Number.isInteger(Number(resposta)) || resposta < 0) {
    console.log('Número inválido!');
    resposta = (await rl.question('Insira o fim novamente: ')).trim();
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
    console.log('-------------------------------')
    console.log('Exercício 4')

    resposta = (await rl.question('Digite o número da tabuada que deseja: ')).trim();

    while (resposta === '' || !Number.isInteger(Number(resposta)) || resposta < 0) {
    console.log('Número inválido!');
    resposta = (await rl.question('Digite o número da tabuada que deseja: ')).trim();
    }

    let n = Number(resposta);

    resposta = (await rl.question('Digite até onde a tabuada será feita: ')).trim();

    while (resposta === '' || !Number.isInteger(Number(resposta)) || resposta < 0) {
    console.log('Número inválido!');
    resposta = (await rl.question('Digite até onde a tabuada será feita: ')).trim();
    }

    let m = Number(resposta);
    
    for(let i = 1; i <= m; i++) {
        console.log(n + ' x ' +  i  + ' = ' + (n * i));
    }
    console.log('-------------------------------')
    console.log('Exercício 5')

    resposta = (await rl.question('Digite o número do triângulo invertido que deseja: ')).trim();

    while (resposta === '' || !Number.isInteger(Number(resposta)) || resposta < 0) {
    console.log('Número inválido!');
    resposta = (await rl.question('Digite o número do triângulo invertido que deseja: ')).trim();
    }

    let num = Number(resposta);

    for (let linha = num; linha >= 1; linha--) {
    let exibir = '';

    for (let numero = 1; numero <= linha; numero++) {
        exibir += `${numero} `;
    }

    console.log(exibir);
}
                
    rl.close();
}
executar();