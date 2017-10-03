angular
  .module('RecuperarSenhaController', [])
  .controller('RecuperarSenhaController', RecuperarSenhaController);

RecuperarSenhaController.$inject = ['RecuperarSenhaService'];

function RecuperarSenhaController(RecuperarSenhaService) {
  let vm = this;

  vm.pessoa = {
    email: ""
  };

  vm.recuperarSenha = recuperarSenha;

  function recuperarSenha(pessoa) {
    RecuperarSenhaService.recuperarSenha(pessoa.email)

    /* PARA QUANDO TIVER O RECUPERAR SENHA FUNCIONANDO COM O ENVIO DE E-MAIL, TIRAR DE COMENTARIO ABAIXO

    .then(resultado => {
      if (resultado.data.error) {
          swal(
              'Ops, algo de errado.',
              `${resultado.data.message}`,
              'error'
          );
      }

      swal('Feito!',
          'Por favor, verifique seu e-mail. Consulte também o Lixo Eletrônico e o Spam',
          "success");

      window.location.href = '/#!/landing/login'
  })
  .catch(resultado => {
      if ((resultado.data.error) || (resultado.status === 404)) {
          swal(
              'Ops, algo de errado.',
              `${resultado.data.message}`,
              'error'
          );
      }
  });*/
  }
}
