angular
  .module('BuscarLigasController', [])
  .controller('BuscarLigasController', BuscarLigasController);

BuscarLigasController.$inject = ['LigasService', '$filter'];

function BuscarLigasController(LigasService, $filter) {
  let vm = this;

  let ligasAtivas = [];

  vm.existe = existe;
  vm.entrarEmLiga = entrarEmLiga;
  vm.solicitarEntradaEmLiga = solicitarEntradaEmLiga;

  LigasService.obterLigas()
    .then(res => {
      if (res.data !== undefined) {
        if (res.data.error) {
          swal(
            'Ops, algo de errado.',
            `${res.data.message}`,
            'error'
          );
        }
      }
      res.data.map(l => {
        if (l.ativo === 1) {
          ligasAtivas.push(l);
        }
      });
      vm.buscarLigas = ligasAtivas;
    })
    .catch(err => {
      if (err.data !== undefined) {
        swal(
          'Ops, algo de errado.',
          `${err.data.message}`,
          'error'
        );
      }
    });

  function existe(e) {
    return ((e === '') || (e === null));
  }

  function entrarEmLiga() {
    swal({
      title: "Entrar na liga",
      text: "Tem certeza que quer entrar nessa liga?",
      type: "info",
      showCancelButton: true,
      confirmButtonColor: "#68B3C8",
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function () {
      LigasService.entrarEmLiga(vm.buscarLigas.id)
        .then(res => {
          if (res.data !== undefined) {
            swal(
              'Ops, algo de errado.',
              'error'
            );
          }
          swal("Feito!",
            "Entrou na liga.",
            "success");
        })
        .catch(err => {
          if (err.data !== undefined) {
            swal(
              'Ops, algo de errado.',
              `${err.data.message}`,
              'error'
            );
          }
        });
    });
  }

  function solicitarEntradaEmLiga() {
    swal({
      title: "Solicitar ingresso",
      text: "Tem certeza que quer pedir para entrar na liga?",
      type: "info",
      showCancelButton: true,
      confirmButtonColor: "#68B3C8",
      confirmButtonText: "Fazer pedido",
      cancelButtonText: "Cancelar",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function () {
      LigasService.solicitarEntradaEmLiga(vm.buscarLigas.id)
        .then(res => {
          if (res.data !== undefined) {
            swal(
              'Ops, algo de errado.',
              'error'
            );
          }
          swal("Solicitado!",
            "Seu pedido foi enviado com sucesso. Aguarde uma notificação do administrador da liga",
            "success");
        })
        .catch(err => {
          if (err.data !== undefined) {
            swal(
              'Ops, algo de errado.',
              `${err.data.message}`,
              'error'
            );
          }
        });
    });
  }
}
