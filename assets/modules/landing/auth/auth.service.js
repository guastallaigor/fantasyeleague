angular
    .module('AuthService', [])
    .service('AuthService', AuthService);

function AuthService($http, $localStorage, $state) {
    let vm = this;

    vm.obterToken = obterToken;
    vm.setarToken = setarToken;
    vm.realizarLogin = realizarLogin;
    vm.realizarCadastro = realizarCadastro;
    vm.realizarLogout = realizarLogout;
    vm.estaAutenticado = estaAutenticado;
    vm.redirecionarParaLogin = redirecionarParaLogin;
    vm.obterDadosUsuario = obterDadosUsuario;

    /**
     * Retorna token do localstorage.
     */
    function obterToken() {
        return $localStorage.token;
    }

    /**
     * Seta token no localstorage.
     * @param {string} token
     */
    function setarToken(token) {
        $localStorage.token = token;
    }

    function estaAutenticado() {
        return !!(obterToken());
    }

    function redirecionarParaLogin() {
        return $state.go('landing.login');
    }

    /**
     * Caso credenciais estejam corretas, retorna token JWT no header.
     *
     * @param {object} data
     */
    function realizarLogin(data) {
      return $http({
        url: 'http://api.fantasyeleague.me/usuario/login',
        method: 'POST',
        data
      });
    }

    function realizarCadastro(data) {
      return $http({
        url: 'http://api.fantasyeleague.me/usuarios',
        method: 'POST',
        data
      });
    }

    /**
     * Remove o token atual do usuário do localstorage.
     */
    function realizarLogout() {
      delete $localStorage.token;
    }

    function obterDadosUsuario() {
      return $http({
        url: 'http://api.fantasyeleague.me/usuarios',
        method: 'GET'
      });
    }
}
