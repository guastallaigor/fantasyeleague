angular.module('EquipeAmadoraController', [])
  .controller('EquipeAmadoraController', EquipeAmadoraController);

EquipeAmadoraController.$inject = ['EquipeAmadoraService', '$timeout'];

function EquipeAmadoraController(EquipeAmadoraService, $timeout) {
  let vm = this;

  vm.mostrarEquipe = EquipeAmadoraService.mostrarEquipe();
  vm.voltar = voltar;
  vm.sair = sair;
  vm.excluirJogador = excluirJogador;
  vm.buscarPerfis = EquipeAmadoraService.buscarPerfis();
  vm.mensagem = '';

  function voltar() {
    window.location.href = '/#!/layout/perfil';
  }

  function sair() {
    swal({
        title: "Você tem certeza que deseja sair da equipe?",
        text: "O administrador da equipe será passado para outro membro se houver",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        closeOnConfirm: false,
        closeOnCancel: true
      },
      function () {
        swal("Saiu equipe!", "Você não está mais nesta equipe", "success");
        window.location.href = '/#!/layout/perfil'
      }
    );
  }

  function excluirJogador(p) {
    swal({
        title: "Excluir",
        text: "Deseja excluir o jogador?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sim",
        cancelButtonText: "Não",
        closeOnConfirm: false,
        closeOnCancel: true
      },
      function () {
        $timeout(function () {
          EquipeAmadoraService.excluirJogador(p);
        });
        swal({
          title: "Jogador excluído com sucesso.",
          type: "success",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "OK"
        });
      }
    );
  }

}
