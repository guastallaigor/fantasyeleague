angular
  .module('CadastrarController', [])
  .controller('CadastrarController', CadastrarController);

CadastrarController.$inject = ['CadastrarService'];

function CadastrarController(CadastrarService) {
  let vm = this;

  vm.salvar = salvar;

  function salvar() {
    CadastrarService
      .salvarUsuario(vm.pessoa)
      .then(res => {
        if (res.data.error) {
          swal(
            'Ops, algo de errado.',
            'error'
          );
        }
        swal(
          'Feito!',
          'Cadastro realizado com sucesso! Por favor, efetue o login.',
          'success'
        );
      })
      .catch(err => {
        if ((err.data.error) || (err.status === 404)) {
          swal(
            'Ops, algo de errado.',
            `${err.data.message}`,
            'error'
          );
        }
      });
  }
}
