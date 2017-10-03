angular
  .module('LayoutController', [])
  .controller('LayoutController', LayoutController);

LayoutController.$inject = ['AuthService', '$state', 'UsuarioService'];

function LayoutController(AuthService, $state, UsuarioService) {
  let vm = this;

  vm.actionOfToggler = actionOfToggler;
  vm.actionToClose = actionToClose;
  vm.actionToLogout = actionToLogout;

  vm.menu = document.querySelector('.menu');
  vm.menuOverlay = document.querySelector('.main-panel-overlay');

  vm.usuarioPossuiAdmin = UsuarioService.obterFuncaoDoCache() === 'usuario'
    ? false
    : true;

  /**
   * Controle das animações do menu na ação de abrir/fechar.
   */
  function actionOfToggler() {
    vm.menu.classList.toggle('hidden');
    vm.menuOverlay.classList.toggle('hidden');
  }

  /**
   * Método para fechar o menu ao clicar em algum item.
   */
  function actionToClose() {
    vm.menu.classList.add('hidden');
    vm.menuOverlay.classList.add('hidden');
  }

  /**
   * Método para deslogar o usuário.
   */
  function actionToLogout() {
    AuthService.realizarLogout();
    $state.go('landing.login');
  }
}
