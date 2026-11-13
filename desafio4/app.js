const Veiculos = require('./Veiculos')
const GerenciadorFrota = require('./GerenciadorFrota')

const novaFrota = new GerenciadorFrota();

novaFrota.adicionarVeiculo(1, "Corolla", "Toyota", 2020, 150, true);
novaFrota.adicionarVeiculo(2, "Civic", "Honda", 2019, 180, false);
novaFrota.adicionarVeiculo(3, "Onix", "Chevrolet", 2022, 120, true);

console.log('----------------------------------------')

console.log(novaFrota.listarVeiculos());

console.log('----------------------------------------')

console.log(novaFrota.verificarDisponibilidade());

console.log('----------------------------------------')

console.log(`R$ ${novaFrota.calcularReceitaPotencial(5)}`);

console.log('----------------------------------------')

novaFrota.atualizarVeiculo(2, "Civic", "Honda", 2019, 200, true);

console.log('----------------------------------------')

console.log(novaFrota.listarVeiculos());

console.log('----------------------------------------')

console.log(`R$ ${novaFrota.calcularReceitaPotencial(5)}`);

console.log('----------------------------------------')
