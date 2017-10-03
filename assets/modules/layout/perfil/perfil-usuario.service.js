angular
  .module('PerfilUsuarioService', [])
  .service('PerfilUsuarioService', PerfilUsuarioService);

PerfilUsuarioService.$inject = ['AuthService', '$http'];

function PerfilUsuarioService(AuthService, $http) {
  let vm = this;
  let uri = 'http://api.fantasyeleague.me';
  let token = AuthService.obterToken();
  let options = {
    "Content-Type": "application/json",
    "Authorization": token
  };

  vm.obterDadosUsuario = obterDadosUsuario;
  vm.obterInsignias = obterInsignias;
  vm.obterTime = obterTime;

  function obterDadosUsuario(id) {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/usuario/${id}`
    });
  }

  function obterInsignias(id) {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/insignias/${id}`
    });
  }

  function obterTime(id) {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/time/${id}`
    });
  }

}
