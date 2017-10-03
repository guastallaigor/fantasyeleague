angular
  .module('CriarLigasController', [])
  .controller('CriarLigasController', CriarLigasController);

CriarLigasController.$inject = ['LigasService'];

function CriarLigasController(LigasService) {
  let vm = this;

  vm.voltar = voltar;
  vm.criarLiga = criarLiga;
  // vm.uploadImagem = uploadImagem
  // vm.imagemCarregada = imagemCarregada

  vm.liga = {
    liga: "",
    descricao: "",
    tipo: '1',
    ativo: 1,
    posicao: 0,
    pontuacao: 0,
    imagem: ""
  };

  function voltar() {
    window.location.href = '/#!/layout/ligas';
  }

  function criarLiga(liga) {
    swal({
        title: "Você tem certeza?",
        text: "Confirmando a liga será criada",
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#68B3C8",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        closeOnConfirm: false,
        closeOnCancel: true
      },
      function () {
        if (document.getElementById('publica').checked) {
          liga.tipo = "1";
        } else liga.tipo = "2";

        LigasService.salvarLiga(liga)
          .then(resultado => {
            if (resultado.data !== undefined) {
              if (resultado.data.error) {
                swal(
                  'Ops, algo de errado.',
                  `${resultado.data.message}`,
                  'error'
                );
              }
            }
            swal("Criada!",
              "Sua liga foi criada com sucesso.",
              "success");

            window.location.href = '/#!/layout/ligas'
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
  }

  // function uploadImagem(element) {
  //     var reader = new FileReader();
  //     reader.onload = vm.imagemCarregada;
  //     reader.readAsDataURL(element.files[0]);
  // }

  // function imagemCarregada(e) {
  //     vm.$apply(function() {
  //         vm.stepsModel.push(e.target.result);
  //         console.log(vm.stepsModel)
  //     });
  // }

  /*vm.voltar = voltar;

  vm.quemParticipa = ["Pública", "Privada", "Não listada"];

  vm.liga = {
      nome: "",
      descricao: "",
      tipo: "1"
  }

  vm.criarLiga = function(liga) {
      swal({
              title: "Você tem certeza?",
              text: "Confirmando a liga será criada",
              type: "info",
              showCancelButton: true,
              confirmButtonColor: "#68B3C8",
              confirmButtonText: "Confirmar",
              cancelButtonText: "Cancelar",
              closeOnConfirm: false,
              closeOnCancel: true
          },
          function() {
              if (document.getElementById('publica').checked) {
                  liga.tipo = "1";
              } else liga.tipo = "2";

              LigasService.salvarLiga(liga);
              swal("Criada!", "Sua liga foi criada com sucesso.", "success");
              window.location.href = '/#!/layout/ligas'
          });
  };

  function voltar() {
      window.location.href = '/#!/layout/ligas';
  }

  vm.uploadImagem = function() {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();
  };*/
}
