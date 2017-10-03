angular
  .module('LoginController', [])
  .controller('LoginController', LoginController);

LoginController.$inject = ['AuthService', '$state'];

function LoginController(AuthService, $state) {
  let vm = this;

  vm.realizarLogin = realizarLogin;

  /**
   * Utiliza o serviço de autenticação e trata a resposta final, exibindo
   * mensagem de erro caso status code seja 401 que é UNAUTHORIZED.
   *
   * @param {string} username
   * @param {string} password
   */
  function realizarLogin(username, password) {
    AuthService.realizarLogin({username, password})
      .then(res => {
        AuthService.setarToken(res.data);
        AuthService.obterDadosUsuario().then(res => {
          localStorage.setItem('role', res.data.funcao);
          localStorage.setItem('banned', res.data.banido);
        });
        if (localStorage.getItem('banned') === 'true') {
          swal({
            title: 'Você está banido!',
            type: 'error',
            text: 'Você foi banido por algum administrador, entre em contato se desejar mais informações sobre!',
            timer: 1000,
            showConfirmButton: false
          });
          return;
        }

        if (localStorage.getItem('role') === 'usuario') {
          $state.go('layout.dashboard');
        }
        else if (localStorage.getItem('role') === 'adm') {
          $state.go('layout.adm');
        }
      })
      .catch(err => {

        /* Se o status da resposta é UNAUTHORIZED exibe mensagem de erro */
        if (!(err.status === 401)) {
          return;
        }

        swal({
          title: 'Ops..',
          type: 'error',
          text: 'Usuário ou senha incorreto!',
          timer: 3000,
          showConfirmButton: false
        });
      })
  }
}
