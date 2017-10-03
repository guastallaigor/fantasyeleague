angular
  .module('LigasDetalhesController', [])
  .controller('LigasDetalhesController', LigasDetalhesController);

LigasDetalhesController.$inject = ['LigasService', '$stateParams', '$timeout'];

function LigasDetalhesController(LigasService, $stateParams, $timeout) {
  let vm = this;

  vm.editarDescricao = editarDescricao;
  vm.posicoes = posicoes;
  vm.voltar = voltar;
  vm.excluirUsuario = excluirUsuario;
  vm.aceitarPedido = aceitarPedido;
  vm.recusarPedido = recusarPedido;

  LigasService.buscarLiga($stateParams.id)
    .then(res => {
      if (res.data.error) {
        swal(
          'Ops, algo de errado.',
          `${res.data.message}`,
          'error'
        );
      }

      vm.ligaAtual = res.data;

      /* PARA TESTES
      vm.ligaAtual.pedidos = [
      {
          id:1,
          imagemPerfil:'assets/images/lol.jpg',
          usuario:"teste 1"
      },
      {
          id:2,
          imagemPerfil:'assets/images/lol.jpg',
          usuario:"teste 2"
      }]
      vm.ligaAtual.jogadores = [
      {
          id:1,
          imagemPerfil:'assets/images/lol.jpg',
          usuario:"teste 1",
          pontuacao:10

      },
      {
          id:2,
          imagemPerfil:'assets/images/lol.jpg',
          pontuacao:20,
          usuario:"teste 2"
      }] */

    })
    .catch(res => {
      swal(
        'Ops, algo de errado.',
        `${res.data.message}`,
        'error'
      );
    });

  function voltar() {
    window.location.href = '/#!/layout/ligas';
  }

  function aceitarPedido(idUsuario, idLiga) {
    swal({
      title: "Aceitar usuário",
      text: "Tem certeza que deseja aceitar que este usuário entre na liga?",
      type: "info",
      showCancelButton: true,
      confirmButtonColor: "#68B3C8",
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function () {
      $timeout(function () {
        LigasService.aceitarPedido(idUsuario, idLiga)
          .then(res => {
            if (res.data.error) {
              swal(
                'Ops, algo de errado.',
                `${res.data.message}`,
                'error'
              );
            }

            LigasService.buscarLiga($stateParams.id)
              .then(res => vm.ligaAtual = res.data);

            swal("Feito!",
              "Usuario entrou na liga.",
              "success");
          })
          .catch(res => {
            swal(
              'Ops, algo de errado.',
              `${res.data.message}`,
              'error'
            );
          })

        //vm.ligaAtual = LigasService.buscarLiga($stateParams.id)
      });
    });

  }

  function recusarPedido(idUsuario, idLiga) {
    swal({
      title: "Rejeitar pedido",
      text: "Tem certeza que deseja rejeitar o pedido deste usuário?",
      type: "info",
      showCancelButton: true,
      confirmButtonColor: "#68B3C8",
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function () {
      $timeout(function () {
        LigasService.recusarPedido(idUsuario, idLiga)
          .then(res => {
            if (res.data.error) {
              swal(
                'Ops, algo de errado.',
                `${res.data.message}`,
                'error'
              );
            }

            LigasService.buscarLiga($stateParams.id)
              .then(res => vm.ligaAtual = res.data);

            swal("Feito!",
              "Convite rejeitado",
              "success");
          })
          .catch(res => {
            swal(
              'Ops, algo de errado.',
              `${res.data.message}`,
              'error'
            );
          })

        //vm.ligaAtual = LigasService.buscarLiga($stateParams.id)
      });
    });
  }

  function posicoes(anterior, atual) {
    posicoes = anterior - atual;
    if (posicoes === 0) {
      return '=';
    }
    if (posicoes < 0) {
      return posicoes;
    } else {
      return '+' + posicoes;
    }
  }

  function editarDescricao() {
    swal({
        title: "Editar descrição",
        text: "",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Nova descrição"
      },
      function (inputValue) {

        if (inputValue === false) return false;

        if (inputValue === "") {
          swal.showInputError("Nova descrição não pode ser nula!");
          return false;
        }
        $timeout(function () {
          LigasService.editarDescricao($stateParams.id, inputValue)
            .then(resultado => {
              if (resultado.data.error) {
                if (resultado.data !== undefined) {
                  swal(
                    'Ops, algo de errado.',
                    `${resultado.data.message}`,
                    'error'
                  );
                }
              }

              LigasService.buscarLiga($stateParams.id)
                .then(resultado => vm.ligaAtual = resultado.data);

              // vm.ligaAtual = LigasService.buscarLiga($stateParams.id)

              swal("Feito!",
                'Descrição editada com sucesso.',
                'success')
            })
            .catch(resultado => {
              if (resultado.data !== undefined) {
                swal(
                  'Ops, algo de errado.',
                  `${resultado.data.message}`,
                  'error'
                );
              }
            })
        });

      });
  }

  function excluirUsuario(idUsuario, idLiga) {
    swal({
      title: "Excluir usuario",
      text: "Tem certeza que deseja excluir este usuario?",
      type: "info",
      showCancelButton: true,
      confirmButtonColor: "#68B3C8",
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function () {
      $timeout(function () {
        LigasService.excluirUsuario(idUsuario, idLiga)
          .then(resultado => {
            if (resultado.data.error) {
              swal(
                'Ops, algo de errado.',
                `${resultado.data.message}`,
                'error'
              );
            }

            LigasService.buscarLiga($stateParams.id)
              .then(res => vm.ligaAtual = res.data);

            swal("Feito!",
              "Usuario excluido.",
              "success");
          })
          .catch(resultado => {
            swal(
              'Ops, algo de errado.',
              `${resultado.data.message}`,
              'error'
            );
          })
      });
    });
  }

  /*vm.ligaAtual = LigasDetalhesService.buscarLiga($stateParams.id);

  vm.voltar = voltar;

  function voltar() {
      window.location.href = '/#!/layout/dashboard';
  }

  vm.posicoes = function(anterior, atual) {
      posicoes = anterior - atual;
      if (posicoes == 0) {
          return '=';
      }
      if (posicoes < 0) {
          return posicoes;
      } else {
          return '+' + posicoes;
      }
  }

  vm.excluirUsuario = function(idUsuario, idLiga) {

      swal({
          title: "Excluir usuario",
          text: "Tem certeza que deseja excluir este usuario?",
          type: "info",
          showCancelButton: true,
          confirmButtonColor: "#68B3C8",
          confirmButtonText: "Sim",
          cancelButtonText: "Cancelar",
          closeOnConfirm: false,
          closeOnCancel: true
      }, function() {
          $timeout(function() {
              LigasDetalhesService.excluirUsuario(idUsuario, idLiga);
              vm.ligaAtual = LigasDetalhesService.buscarLiga($stateParams.id);
          });
          swal("Feito!", "Usuario excluido.", "success");
      });
  }*/
}
