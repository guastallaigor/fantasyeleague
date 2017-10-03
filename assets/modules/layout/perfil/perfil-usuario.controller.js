angular
  .module('PerfilUsuarioController', [])
  .controller('PerfilUsuarioController', PerfilUsuarioController);

PerfilUsuarioController.$inject = ['PerfilUsuarioService'];

function PerfilUsuarioController(PerfilUsuarioService) {
  let vm = this;

  vm.existe = existe;
  vm.denunciar = denunciar;
  vm.convidarLiga = convidarLiga;
  vm.convidarEquipe = convidarEquipe;

  function existe(e) {
    return ((e === '') || (e === null));
  }

  PerfilUsuarioService.obterDadosUsuario(id)
    .then(res => {
      vm.perfilvisitado = res.data;
    });

  PerfilUsuarioService.obterInsignias(id)
    .then(res => {
      vm.insigniasperfilvisitado = res.data;
    });

  PerfilUsuarioService.obterTime(id)
    .then(res => {
      vm.timeperfilvisitado = res.data;
    });


  function denunciar() {
    swal({
        title: "Denúncia",
        text: "Informe o motivo pelo qual você está enviando está denúncia",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        imageUrl: "assets/images/warning.png",
        animation: "slide-from-top",
        inputPlaceholder: "(ex: Imagem/nome inapropriado, bug, hack)"
      },
      function (inputValue) {
        if (inputValue === false) {
          return false;
        }

        if (inputValue === "") {
          swal.showInputError("Você precisa digitar o motivo aqui!");
          return false;
        }

        swal("Sua denúncia foi enviada com sucesso!", 'Obrigado por ajudar a melhorar a comunidade Fantasy e-League', 'success')
        //"You wrote: " + inputValue, "success");
      });
  }

  function convidarLiga() {
    swal("Convite enviado!", "Usuário foi convidado para sua liga", "success");
  }

  function convidarEquipe() {
    swal("Convite enviado!", "Usuário foi convidado para sua equipe", "success");
  }
}
