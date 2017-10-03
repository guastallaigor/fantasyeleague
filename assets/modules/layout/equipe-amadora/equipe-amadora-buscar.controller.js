angular.module('EquipeAmadoraBuscarController', [])
  .controller('EquipeAmadoraBuscarController', EquipeAmadoraBuscarController);

EquipeAmadoraBuscarController.$inject = ['EquipeAmadoraService'];

function EquipeAmadoraBuscarController(EquipeAmadoraService) {
  let vm = this;

  //vm.buscarLigasAtivas = LigasService.buscarLigasAtivas();
  vm.buscarEquipesAmadoras = EquipeAmadoraService.buscarEquipesAmadoras();
  vm.voltar = voltar;
  vm.solicitarEntradaEquipe = solicitarEntradaEquipe;
  vm.existe = existe;

  function existe(e) {
    return ((e === '') || (e === null));
  }

  function voltar() {
    window.location.href = '/#!/layout/perfil';
  }

  function solicitarEntradaEquipe() {
    swal({
        title: "Solicitar ingresso",
        text: "Tem certeza que quer pedir para entrar na equipe?",
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#68B3C8",
        confirmButtonText: "Fazer pedido",
        cancelButtonText: "Cancelar",
        closeOnConfirm: false,
        closeOnCancel: true
      },
      function () {
        swal("Solicitado!", "Seu pedido foi enviado com sucesso. Aguarde uma notificação do administrador da equipe", "success");
      });
  }

}
