angular
  .module('AuthController', [])
  .controller('AuthController', AuthController);

AuthController.$inject = ['$state'];

function AuthController($state) {
  let vm = this;

  vm.redirecionarParaLogin = redirecionarParaLogin;

  function redirecionarParaLogin() {
    $state.go('landing.login')
  }
}
