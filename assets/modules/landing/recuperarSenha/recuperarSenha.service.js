angular
  .module('RecuperarSenhaService', [])
  .service('RecuperarSenhaService', RecuperarSenhaService);

RecuperarSenhaService.$inject = ['$http'];

function RecuperarSenhaService($http) {
  let vm = this;
  let uri = 'http://api.fantasyeleague.me';

  vm.recuperarSenha = recuperarSenha;

  function recuperarSenha(email) {
    return $http({
      method: 'POST',
      url: `${uri}/recuperar`,
      data: email
    });
  }
}
