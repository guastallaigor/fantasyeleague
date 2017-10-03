angular
  .module('LandingService', [])
  .service('LandingService', LandingService);

LandingService.$inject = ['AuthService', '$http'];

function LandingService(AuthService, $http) {
  let vm = this;
  let uri = 'http://api.fantasyeleague.me';
  let token = AuthService.obterToken();
  let options = {
    "Content-Type": "application/json",
    "Authorization": token
  };

  vm.enviarMensagem = enviarMensagem;

  function enviarMensagem(contato) {
    return $http({
      method: 'POST',
      headers: options,
      url: `${uri}/contato`,
      data: contato
    });
  }
}
