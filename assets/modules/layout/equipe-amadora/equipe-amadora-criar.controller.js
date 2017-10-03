angular.module('EquipeAmadoraCriarController', [])
  .controller('EquipeAmadoraCriarController', EquipeAmadoraCriarController);

EquipeAmadoraCriarController.$inject = ['EquipeAmadoraService'];

function EquipeAmadoraCriarController(EquipeAmadoraService) {
  let vm = this;

  vm.voltar = voltar;
  vm.buscarPerfis = EquipeAmadoraService.buscarPerfisCriar(); //alterar funcao provavelmente

  vm.equipe = {
    nome: "",
    descricao: "",
    tipo: "1"
  };

  vm.criarEquipe = function (equipe) {
    swal({
        title: "Você tem certeza?",
        text: "Confirmando os dados serão salvos para a equipe",
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#68B3C8",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        closeOnConfirm: false,
        closeOnCancel: true
      },
      function () {
        EquipeAmadoraService.salvarEquipeAmadora(equipe);
        swal("Criada!", "Sua equipe foi salva com sucesso.", "success");
        window.location.href = '/#!/layout/equipeamadora'
      });
  };

  function voltar() {
    window.location.href = '/#!/layout/perfil';
  }

  vm.uploadImagem = function () {
    let fileInput = document.getElementById('uploadFile');
    fileInput.click();
  };

  /*vm.habilitarBotao = function(p){
      return p.conviteenviado;
      console.log("fim")
      console.log(p.conviteenviado)
  }*/

  vm.convidar = function (p) {
    p.conviteenviado = true;
    swal({
      title: "Convite enviado",
      text: "Seu convite foi enviado com sucesso",
      type: "success",
      showCancelButton: false,
      confirmButtonColor: "#68B3C8",
      confirmButtonText: "OK",
      cancelButtonText: "Cancelar",
      closeOnConfirm: true,
      closeOnCancel: true
    });
  };

  vm.cancelar = function (p) {
    p.conviteenviado = false;
    swal({
      title: "Convite cancelado",
      text: "O convite enviado foi cancelado",
      type: "warning",
      showCancelButton: false,
      confirmButtonColor: "#68B3C8",
      confirmButtonText: "OK",
      cancelButtonText: "Cancelar",
      closeOnConfirm: true,
      closeOnCancel: true
    });
  };

}
