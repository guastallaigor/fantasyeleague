angular
  .module('JogadorProfissionalService', [])
  .service('JogadorProfissionalService', JogadorProfissionalService);

JogadorProfissionalService.$inject = ['$http'];

function JogadorProfissionalService($http) {
  let vm = this;
  let uri = 'http://api.fantasyeleague.me';
  let token = AuthService.obterToken();
  let options = {
    "Content-Type": "application/json",
    "Authorization": token
  };

  vm.buscarJogadorProfissionalPorId = buscarJogadorProfissionalPorId;

  /**
   * Obtêm dados de um jogador profissional por Id.
   * @param {int} id
   */
  function buscarJogadorProfissionalPorId(id) {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/jogador/${id}`
    });
  }
}
