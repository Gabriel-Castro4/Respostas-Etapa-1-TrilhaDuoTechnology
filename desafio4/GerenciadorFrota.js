
const veiculos = require('./Veiculos')

class GerenciadorFrota {
  constructor() {
    this.veiculos = [];
  }

  adicionarVeiculo(id, modelo, marca, ano, precoDiaria, disponivel) {
  if (
    !Number.isInteger(id) ||
    typeof modelo !== 'string' || modelo.trim() === '' ||
    typeof marca !== 'string' || marca.trim() === '' ||
    !Number.isInteger(ano) ||
    typeof precoDiaria !== 'number' || precoDiaria <= 0 ||
    typeof disponivel !== 'boolean'
  ) {
    console.log('Dados do veículo inválidos.');
    return false;
  }

  const idExistente = this.veiculos.some(v => v.id === id);

  if (idExistente) {
    console.log(`Já existe um veículo com o id ${id}.`);
    return false;
  }

  this.veiculos.push(
    new veiculos(id, modelo, marca, ano, precoDiaria, disponivel)
  );

  console.log(`Veículo adicionado: ${modelo} (id ${id})`);
  return true;
}

  atualizarVeiculo(id, modelo, marca, ano, precoDiaria, disponivel) {
    const veiculo = this.veiculos.find(v => v.id === id);

    if (!veiculo) {
      console.log(`Veículo com id ${id} não encontrado.`);
      return;
    }

    Object.assign(veiculo, { modelo, marca, ano, precoDiaria, disponivel });
    console.log(`Veículo id ${id} atualizado: ${modelo}`);
  }

  listarVeiculos() {
    return this.veiculos;
  }

  verificarDisponibilidade() {
    const disponiveis =  this.veiculos.filter(v => v.disponivel);
        
    if (disponiveis.length === 0) {
    console.log("Nenhum veículo disponível.");
  }

  return disponiveis;
}
  

  calcularReceitaPotencial(dias) {
  if (!Number.isInteger(dias) || dias <= 0) {
    console.log('Quantidade de dias inválida.');
    return 0;
  }

  return this.veiculos
    .filter(v => v.disponivel === true)
    .reduce((total, v) => total + v.precoDiaria * dias, 0);
  }
}

module.exports = GerenciadorFrota;