angular
  .module('PerfilService', [])
  .service('PerfilService', PerfilService);

PerfilService.$inject = ['AuthService', '$http'];

function PerfilService(AuthService, $http) {
  let vm = this;
  let uri = 'http://api.fantasyeleague.me';
  let token = AuthService.obterToken();
  let options = {
    "Content-Type": "application/json",
    "Authorization": token
  };

  vm.obterInsignias = obterInsignias;
  vm.obterTime = obterTime;
  vm.obterHistorico = obterHistorico;
  vm.obterLiga = obterLiga;
  vm.editar = editar;
  vm.recursosPremium = recursosPremium;
  vm.desativarConta = desativarConta;

  function obterInsignias(id) {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/insignias/usuario/${id}`
    });
  }

  function obterTime(id) {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/time`
    });
  }

  function obterLiga(id) {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/ligas/usuario/${id}`
    });
  }

  function buscarTimePorUsuario(id) {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/usuario/${id}`
    });
  }

  function obterHistorico() {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/historico`
    });
  }

  function editar(id, perfil) {
    return $http({
      method: 'PUT',
      headers: options,
      data: perfil,
      url: `${uri}/usuarios`
    });
  }

  function excluirMembroTime(id) {
    return $http({
      method: 'DELETE',
      headers: options,
      url: `${uri}${id}`
    });
  }

  function desativarConta() {
    return $http({
      method: 'POST',
      headers: options,
      url: `${uri}/desativar`
    });
  };

  recursos = [{
    id: 1,
    nome: 'Alterar nome de usuário',
    valor: '10,00'
  },
    {
      id: 2,
      nome: 'Reconfigurar conta',
      valor: '50,00'
    }
  ];

  function recursosPremium() {
    return angular.copy(recursos);
  }
}
