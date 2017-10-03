angular
  .module('LandingController', [])
  .controller('LandingController', LandingController);

LandingController.$inject = ['LandingService', 'FaqService'];

function LandingController(LandingService, FaqService) {
  let vm = this;

  vm.realizarContato = realizarContato;

  FaqService
    .obterFaqs()
    .then(res => vm.buscarFaq = res.data);

  function realizarContato(contato) {
    LandingService.enviarMensagem(contato)
      .then(res => {
        if (res.data.error) {
          swal(
            'Ops, algo de errado.',
            `${res.data.message}`,
            'error'
          );
        }

        swal('Enviada!',
          'A mensagem foi enviada com sucesso',
          "success");
      })
      .catch(res => {
        if ((res.data.error) || (res.status === 404)) {
          swal(
            'Ops, algo de errado.',
            `${res.data.message}`,
            'error'
          );
        }
      });
  }
}
