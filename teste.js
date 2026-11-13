//Essa bloco é para testar funções sozinhas sem interferir no código principal

const readline = require('readline/promises');
const { stdin, stdout } = require('process');

async function executar() {
    const rl = readline.createInterface({ input: stdin, output: stdout });
    
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