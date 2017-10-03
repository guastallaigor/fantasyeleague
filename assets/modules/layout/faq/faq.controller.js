angular
  .module('FaqController', [])
  .controller('FaqController', FaqController);

FaqController.$inject = ['FaqService'];

function FaqController(FaqService) {
  let vm = this;

  FaqService
    .obterFaqs()
    .then(res => {
      if (res.data.length === 0) {
        vm.buscarFaq = [{
          pergunta : "Nenhuma pergunta encontrada",
          resposta : ""
        }];
      } else {
        vm.buscarFaq = res.data;
      }
    });
}
