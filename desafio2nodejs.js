const readline = require('readline:/promises');
const { stdin, stdout } = require('process');

async function executar() {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    const idade = Number(await rl.question('Digite sua idade: '));

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
    const numero = Number(await rl.question('Digite um número inteiro: '));
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
    const a = Number(await rl.question('a: '));
    const b = Number(await rl.question('b: '));
    const c = Number(await rl.question('c: '));

    if (a > b && a > c) {
        console.log(`O maior número é: ${a}`);
    } else if (b > a && b > c) {
        console.log(`O maior número é: ${b}`);
    } else if (c > a && c > b) {
        console.log(`O maior número é: ${c}`);
    }
    console.log('-------------------------------')
    console.log('Exercício 4')
    const num = Number(await rl.question('Digite um número inteiro: '));

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

    const nota = Number(await rl.question('Classifique uma nota de 0 a 100: '));

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