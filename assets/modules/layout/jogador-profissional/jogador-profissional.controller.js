angular
  .module('JogadorProfissionalController', [])
  .controller('JogadorProfissionalController', JogadorProfissionalController);

JogadorProfissionalController.$inject = ['JogadorProfissionalService', '$stateParams'];

function JogadorProfissionalController(JogadorProfissionalService, $stateParams) {
  let vm = this;
  let id = $stateParams.id;

  vm.voltar = voltar;

  function voltar() {
    window.location.href = '/#!/layout/dashboard';
  }

  JogadorProfissionalService
    .buscarJogadorProfissionalPorId(id)
    .then(resultado => vm.jogador = resultado.data)
}
