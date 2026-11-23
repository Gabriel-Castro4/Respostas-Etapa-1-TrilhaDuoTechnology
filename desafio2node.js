const readline = require('readline/promises');
const { stdin, stdout } = require('process');

async function executar() {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    let idade = Number(await rl.question('Digite sua idade: '));
    while(true){
        if(idade !== '' && Number.isInteger(idade) && !(idade <= 0 || idade >= 120)){
            break;
        }else{
           console.log('Idade inválida!')  
           idade = Number(await rl.question('Insira sua idade novamente: '));
        }
    }    

    if (idade >= 60) {
        console.log('Você é um idoso.');
    } else if (idade >= 18 && idade < 60) {
        console.log('Você é um adulto.');
    } else if (idade >= 13 && idade < 18) {
        console.log('Você é um adolescente.');
    } else {
        console.log('Você é uma criança.');
    }
    console.log('-------------------------------')
    console.log('Exercício 2')
    let numero = Number(await rl.question('Digite um número inteiro: '));
    while(true){
        if(numero !== '' && Number.isInteger(numero)){
            break;
        }else{
           console.log('Número inválido!')  
           numero = Number(await rl.question('Insira o número novamente: '));
        }
    }
    if (numero % 2 === 0) {
        console.log('O número é positivo e par.');
    } else if (numero % 2 !== 0) {
        console.log('O número é positivo e ímpar.');
    } else if (numero < 0) {
        console.log('O número é negativo.');
    } else {
        console.log('O número é zero.');
    }
    console.log('-------------------------------')
    console.log('Exercício 3')
    console.log('Digite três números inteiros: ')
    let a = Number(await rl.question('a: '));
    while(true){
        if(a !== '' && Number.isInteger(a)){
            break;
        }else{
           console.log('Número inválido!')  
           a = Number(await rl.question('Insira o número novamente: '));
        }
    }
    let b = Number(await rl.question('b: '));
    while(true){
        if(b !== '' && Number.isInteger(b)){
            break;
        }else{
           console.log('Número inválido!')  
           b = Number(await rl.question('Insira o número novamente: '));
        }
    }
    let c = Number(await rl.question('c: '));
    while(true){
        if(c !== '' && Number.isInteger(c)){
            break;
        }else{
           console.log('Número inválido!')  
           c = Number(await rl.question('Insira o número novamente: '));
        }
    }
    if (a > b && a > c) {
        console.log(`O maior número é: ${a}`);
    } else if (b > a && b > c) {
        console.log(`O maior número é: ${b}`);
    } else if (c > a && c > b) {
        console.log(`O maior número é: ${c}`);
    }
    console.log('-------------------------------')
    console.log('Exercício 4')
    let num = Number(await rl.question('Digite um número inteiro: '));
    while(true){
        if(num !== '' && Number.isInteger(num)){
            break;
        }else{
           console.log('Número inválido!')  
           num = Number(await rl.question('Insira o número novamente: '));
        }
    
    }
    if (num % 2 === 0 && num % 3 === 0) {
        console.log("O número é divisível por 2 e 3.")
    } else if (num % 2 === 0 && num % 3 !== 0) {
        console.log("O número é divisível apenas por 2.")
    } else if (num % 3 === 0 && num % 2 !== 0) {
        console.log("O número é divisível apenas por 3.")
    }else {
        console.log("O número não é divisível por 2 nem 3.")
    }

    console.log('-------------------------------')
    console.log('Exercício 5')

    let nota = Number(await rl.question('Classifique uma nota de 0 a 100: '));
    while(true){
        if(nota !== '' && Number.isInteger(nota) && !(nota <= 0 || nota >= 100)){
            break;
        }else{
           console.log('Digite um número INTEIRO entre 0 e 100')  
           nota = Number(await rl.question('Insira o número novamente: '));
        }
    }

    if (nota >= 90) {
        console.log('Excelente');
    } else if (nota >= 70) {
        console.log('Bom.');
    } else if (nota >= 50) {
        console.log('Regular.');
    } else {
        console.log('Insuficiente');
    }

    rl.close();
}
executar();