angular
  .module('UsuarioService', [])
  .service('UsuarioService', UsuarioService);

  UsuarioService.$inject = ['$http'];

  function UsuarioService($http) {
    let vm = this;

    vm.obterFuncaoDoCache = obterFuncaoDoCache;

    /**
     * @todo Refatorar método para que busque a função do usuário
     * independente de serviço.
     */
    function obterFuncaoDoCache() {
      return localStorage.getItem('role');
    }
  }
