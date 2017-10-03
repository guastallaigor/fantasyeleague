angular.module('SuporteController', [])
  .controller('SuporteController', SuporteController);

SuporteController.$inject = ['SuporteService'];

function SuporteController(SuporteService) {
  let vm = this;

  vm.suporte = {
    categoria: "0",
    mensagem: ""
  };

  vm.enviarMensagem = enviarMensagem;

  function enviarMensagem() {
    if ((vm.suporte.categoria === null) || (vm.suporte.categoria === "0") || vm.suporte.categoria === 0) {
      sweetAlert("Erro...", "Escolha uma categoria!", "error");
      return;
    }
    SuporteService.enviarMensagem(vm.suporte)
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
