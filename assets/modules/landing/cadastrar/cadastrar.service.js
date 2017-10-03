angular
  .module('CadastrarService', [])
  .service('CadastrarService', CadastrarService);

CadastrarService.$inject = ['$http'];

function CadastrarService($http) {
  let vm = this;
  let options = {
    "Content-Type": "application/json"
  };

  vm.salvarUsuario = salvarUsuario;

  function salvarUsuario(pessoa) {
    return $http({
      method: 'POST',
      headers: options,
      url: 'http://api.fantasyeleague.me/usuarios',
      data: pessoa
    });
  }
}
