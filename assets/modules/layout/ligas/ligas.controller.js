angular
  .module('LigasController', [])
  .controller('LigasController', LigasController);

LigasController.$inject = ['LigasService'];

function LigasController(LigasService) {
  let vm = this;
  let ligasAtivas = [];

  vm.existe = existe;

  function existe(e) {
    return ((e === '') || (e === null));
  }

  LigasService.obterLigas()
    .then(res => {
      res.data.map(l => {
        if (l.ativo === 1) {
          ligasAtivas.push(l);
        }
      });
      vm.buscarLigasAtivas = ligasAtivas;
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

}
