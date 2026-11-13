
const veiculos = require('./Veiculos')

class GerenciadorFrota {
  constructor() {
    this.veiculos = [];
  }

  adicionarVeiculo(id, modelo, marca, ano, precoDiaria, disponivel) {
    this.veiculos.push(new veiculos(id, modelo, marca, ano, precoDiaria, disponivel));
    console.log(`Veículo adicionado: ${modelo} (id ${id})`);
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
    return this.veiculos
      .filter(v => v.disponivel)
      .reduce((total, v) => total + v.precoDiaria * dias, 0);
  }
}

module.exports = GerenciadorFrota;