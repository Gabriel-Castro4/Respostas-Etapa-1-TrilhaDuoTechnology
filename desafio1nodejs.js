const readline = require('readline/promises');
const { stdin, stdout } = require('process');

async function executar() {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    const anoAtual = 2026;

    const nome = await rl.question('Digite seu nome completo: ');
    const idade = Number(await rl.question('Insira sua idade: '));
    //lembrar de sempre colocar pontos nos números decimais
    const altura = Number(await rl.question('Insira sua altura em metros: '));
    const peso = Number(await rl.question('Insira seu peso em kg: '));

    const anoNascimento = anoAtual - idade;

    console.log(`Olá, ${nome}! Você nasceu em ${anoNascimento}, tem ${idade} anos, mede ${altura} metros e pesa ${peso} kg.`);
    console.log('-------------------------------');
    console.log('Exercício 2');

    const imc = peso / (altura * altura);
    const alturaEmCm = altura * 100;

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Sua altura em centímetros é: ${alturaEmCm.toFixed(2)} cm`);
    //ou
    console.log(`Sua altura em centímetros é: ${altura * 100} cm`);
    console.log(`Sua idade em meses é: ${idade * 12}`);
    console.log('-------------------------------');
    console.log('Exercício 3');
    console.log("Seu nome em letras maiúsculas é: " + nome.toUpperCase());
    console.log("Seu nome em letras minúsculas é: " + nome.toLowerCase());
    console.log(`Seu nome tem ${nome.length} caracteres.`);
    console.log('-------------------------------');
    console.log('Exercício 4');
    console.log(`Daqui a 15 anos, você terá ${idade + 15} anos.`);
    console.log('-------------------------------');
    const alturaInteiro = Math.trunc(altura);
    console.log('Exercício 5');
    console.log(`Sua idade em float é: ${idade.toFixed(2)}`);
    console.log(`Sua altura é: ${alturaInteiro}`);
    rl.close();
}

executar();