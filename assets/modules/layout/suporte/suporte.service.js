angular
  .module('SuporteService', [])
  .service('SuporteService', SuporteService);

  SuporteService.$inject = ['$http'];

  function SuporteService($http) {
    let vm = this;
    let uri = 'http://api.fantasyeleague.me';

    vm.enviarMensagem = enviarMensagem;

    /**
     * Serviço utilizado para enviar uma mensagem
     * a lista de suporte.
     * @param {object} suporte
     */
    function enviarMensagem(suporte) {
      return $http({
        method: 'POST',
        url: `${uri}/suporte`,
        data: suporte
      });
    }
  }
