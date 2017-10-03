angular
  .module('EscalacaoController', [])
  .controller('EscalacaoController', EscalacaoController);

EscalacaoController.$inject = ['EscalacaoService', 'PerfilService'];

function EscalacaoController(EscalacaoService, PerfilService) {
  let vm = this;

  vm.escalacao = [];
  vm.saldo = 0;

  vm.adquirirJogador = adquirirJogador;
  vm.venderJogador = venderJogador;
  vm.filtrarPosicao = filtrarPosicao;
  vm.obterSaldo = obterSaldo;
  vm.obterEscalacao = obterEscalacao;

  EscalacaoService
    .obterJogadoresDestaques()
    .then(resultado => vm.jogadores = resultado.data);

  vm.obterEscalacao();
  vm.obterSaldo();

  /**
   * Atualiza o saldo do usuário na view.
   */
  function obterSaldo() {
    PerfilService
      .obterSaldo()
      .then(resultado => vm.saldo = resultado.data.saldo);
  }


  /**
   * Atualiza a escalação do usuário, pode ser utilizado
   * após uma compra ou venda.
   */
  function obterEscalacao() {
    vm.posicoes = ['top', 'jug', 'mid', 'adc', 'sup'];

    EscalacaoService
      .obterEscalacao()
      .then(resultado => {
        vm.escalacao = resultado.data;

        vm.escalacao.map(jogador => {
          vm.posicoes.map(posicao => {
            if ((posicao === jogador.posicao)) {
              vm.posicoes.splice(vm.posicoes.indexOf(posicao), 1)
            }
          })
        });

        vm.posicoes.map(posicao => {
          vm.escalacao.push({
            posicao
          })
        })
      });
  }


  /**
   * @param {int} id
   */
  function venderJogador(id) {
    EscalacaoService
      .venderJogador(id)
      .then(resultado => {
        if (resultado.data.error) {
          swal(
            'Ops, algo de errado.',
            `${resultado.data.message}`,
            'error'
          );

          return;
        }

        swal(
          'É isso ai!',
          `${resultado.data.message}`,
          'success'
        );

        vm.obterEscalacao();
        vm.obterSaldo();
      })
  }


  /**
   * @param {int} id
   */
  function adquirirJogador(id) {
    EscalacaoService
      .adquirirJogador(id)
      .then(resultado => {
        if (resultado.data.error) {
          swal(
            'Ops, algo de errado.',
            `${resultado.data.message}`,
            'error'
          );

          return;
        }

        vm.obterEscalacao();
        vm.obterSaldo();

        swal(
          'É isso ai!',
          `${resultado.data.message}`,
          'success'
        );
      });
  }


  /**
   * Faz o filtro de jogadores do mercado com
   * a posição em específico.
   *
   * @param {string} posicao
   */
  function filtrarPosicao(posicao) {
    EscalacaoService
      .obterJogadoresPorPosicao(posicao)
      .then(resultado => vm.jogadores = resultado.data);
  }
}
