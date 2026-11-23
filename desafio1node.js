const readline = require('readline/promises');
const { stdin, stdout } = require('process');

async function executar() {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    const anoAtual = 2026;
    
    let resposta = (await rl.question('Digite seu nome completo: ')).trim();

while (!/^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u.test(resposta)) {
  console.log('Nome inválido!');
  resposta = (await rl.question('Digite seu nome completo novamente: ')).trim();
}

const nome = resposta;

     resposta = (await rl.question('Insira sua idade: ')).trim();

    while (resposta === '' || !Number.isInteger(Number(resposta))) {
    console.log('Idade inválida');
    resposta = (await rl.question('Insira sua idade novamente: ')).trim();
}

    const idade = Number(resposta);

    //lembrar de sempre colocar pontos nos números decimais
     resposta = (await rl.question('Digite sua altura em metros: ')).trim();

while (
  resposta === '' ||
  !Number.isFinite(Number(resposta)) ||
  Number(resposta) <= 0
) {
  console.log('Altura inválida. Digite um valor maior que zero.');
  resposta = (await rl.question('Digite sua altura novamente: ')).trim();
}

const altura = Number(resposta);
    

    resposta = (await rl.question('Digite seu peso em kg: ')).trim();

while (
  resposta === '' ||
  !Number.isFinite(Number(resposta)) ||
  Number(resposta) <= 0
) {
  console.log('Peso inválido. Digite um valor maior que zero.');
  resposta = (await rl.question('Digite seu peso novamente: ')).trim();
}

const peso = Number(resposta);

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