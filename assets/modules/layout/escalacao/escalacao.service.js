angular
  .module('EscalacaoService', [])
  .service('EscalacaoService', EscalacaoService);

EscalacaoService.$inject = ['AuthService', '$http'];

function EscalacaoService(AuthService, $http) {
  let vm = this;
  let uri = 'http://mock.fantasyeleague.me';
  let token = AuthService.obterToken();
  let options = {
    "Content-Type": "application/json",
    "Authorization": token
  };

  vm.obterJogadoresDestaques = obterJogadoresDestaques;
  vm.obterEscalacao = obterEscalacao;
  vm.obterJogadoresPorPosicao = obterJogadoresPorPosicao;

  vm.venderJogador = venderJogador;
  vm.adquirirJogador = adquirirJogador;


  /**
   * Obtêm os 15 jogadores destaques.
   * @return {array}
   */
  function obterJogadoresDestaques() {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/jogador/destaques`
    })
  }


  /**
   * Método para obter jogadores de uma posição especifica.
   * @param {string} posicao
   */
  function obterJogadoresPorPosicao(posicao) {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/jogador/posicao/${posicao}`
    })
  }


  /**
   * Método que retorna a escalação com base no perfil do usuário.
   * @return {array}
   */
  function obterEscalacao() {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/usuario/escalacao`
    })
  }


  /**
   * Método para remover um jogador da escalação.
   * @param {int} id
   */
  function venderJogador(id) {
    return $http({
      method: 'POST',
      headers: options,
      url: `${uri}/jogador/vender/${id}`
    })
  }


  /**
   * Método para adicionar um jogador a escalação.
   * @param {int} id
   */
  function adquirirJogador(id) {
    return $http({
      method: 'POST',
      headers: options,
      url: `${uri}/jogador/comprar/${id}`
    })
  }
}
