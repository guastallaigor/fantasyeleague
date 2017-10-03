angular
  .module('BuscarUsuariosController', [])
  .controller('BuscarUsuariosController', BuscarUsuariosController);

//BuscarUsuariosController.$inject = ['LigasService', '$filter', '$stateParams', '$timeout'];
BuscarUsuariosController.$inject = ['LigasService', '$stateParams', '$timeout'];

function BuscarUsuariosController(LigasService, $stateParams, $timeout) {
  let vm = this;

  let idliga = $stateParams.id;
  vm.usuarios = [];

  vm.existe = existe;
  vm.convidarUsuario = convidarUsuario;
  vm.voltar = voltar;

  function existe(e) {
    //var result = $filter('filter')(vm.buscarUsuarios, e);
    //return (result.length !== 0);
    return ((e === '') || (e === null));
  }

  LigasService.buscarUsuarios()
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

      vm.usuarios = res.data
    })
    .catch(res => {
      if (res.data !== undefined) {
        swal(
          'Ops, algo de errado.',
          `${res.data.message}`,
          'error'
        );
      }
    });

  function voltar() {
    window.location.href = '/#!/layout/ligas/detalhes/' + $stateParams.id;
  }

  function convidarUsuario(usuario) {
    swal({
      title: "Convidar usuário",
      text: "Tem certeza que quer convidar este usuário?",
      type: "info",
      showCancelButton: true,
      confirmButtonColor: "#68B3C8",
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function () {
      $timeout(function () {
        LigasService.convidarUsuario(idliga, usuario)
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

            swal("Feito!",
              "Convite enviado!",
              "success");

          })
          .catch(res => {
            if (res.data !== undefined) {
              swal(
                'Ops, algo de errado.',
                `${res.data.message}`,
                'error'
              );
            }
          })
      });
    });
  }

}
