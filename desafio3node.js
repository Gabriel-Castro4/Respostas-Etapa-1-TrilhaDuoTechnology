//Essa bloco é para testar funções sozinhas sem interferir no código principal

const readline = require('readline/promises');
const { stdin, stdout } = require('process');

async function executar() {
    const rl = readline.createInterface({ input: stdin, output: stdout });


    console.log('Exercício 1')
    let limite = Number(await rl.question('Digite um número: '));
    
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

    let numeroFatorar = Number(await rl.question('Digite um número inteiro e positivo: '));

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

    let inicio = Number(await rl.question('Digite o inicio: '));
    let fim = Number(await rl.question('Digite o fim: '));

    let soma = 0;
    for(inicio; inicio <= fim; inicio++) {
        if(inicio % 2 !== 0){
            soma += inicio;
        }
        console.log(inicio);
    }
    console.log(soma);
    console.log('-------------------------------')
    console.log('Exercício 4')
        let n = Number(await rl.question('Digite o número da tabuada que deseja: '));
        let m = Number(await rl.question('Digite até onde a tabuada será feita: '));
    
    for(let i = 1; i <= m; i++) {
        console.log(n + ' x ' +  i  + ' = ' + (n * i));
    }
    console.log('-------------------------------')
    console.log('Exercício 5')

    const num = Number(await rl.question('Digite o número do triângulo invertido que deseja: '));

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