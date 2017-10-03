angular
  .module('DashboardController', [])
  .controller('DashboardController', DashboardController);

DashboardController.$inject = ['EscalacaoService'];

function DashboardController(EscalacaoService) {
  let vm = this;
  vm.perfil = {
    nivel: 5,
    carteira: 500,
    quantidadeLigas: 3,
    balanco: -50,
    expAtual: 12500,
    expProxNivel: 20000,
    expRodadaAnterior: 11000
  };

  EscalacaoService
    .obterJogadoresDestaques()
    .then(res => vm.jogadores = res.data);

  vm.ligas = [{
    id: 1727001,
    imagem: "assets/images/ligas/l1.png",
    nome: "Meat Playground",
    posicao: 2,
    posicaoAnterior: 4
  },
    {
      id: 1727002,
      imagem: "assets/images/ligas/l2.png",
      nome: "Fear",
      posicao: 1,
      posicaoAnterior: 2
    },
    {
      id: 1727003,
      imagem: "assets/images/ligas/l3.png",
      nome: "Huma",
      posicao: 6,
      posicaoAnterior: 3
    }
  ];
  vm.jogadores = [{
    id: 6235234,
    posicao: 1,
    nome: "Bayer",
    valor: 35,
    nacionalidade: "Paraguai",
    imagemPais: "assets/images/pais/paraguai.png"
  },
    {
      id: 62352342,
      posicao: 2,
      nome: "Campo Mourão",
      valor: 30,
      nacionalidade: "Ucrânia",
      imagemPais: "assets/images/pais/ucrania.png"
    },
    {
      id: 6235214,
      posicao: 3,
      nome: "Alemão",
      valor: 25,
      nacionalidade: "Alemanha",
      imagemPais: "assets/images/pais/alemanha.png"
    },
    {
      id: 6231134,
      posicao: 4,
      nome: "Igor Guastalla",
      valor: 20,
      nacionalidade: "Chile",
      imagemPais: "assets/images/pais/chile.png"
    },
    {
      id: 6236234,
      posicao: 5,
      nome: "Zorak",
      valor: 15,
      nacionalidade: "Mexico",
      imagemPais: "assets/images/pais/mexico.png"
    },
    {
      id: 6235661,
      posicao: 6,
      nome: "Leocádio",
      valor: 10,
      nacionalidade: "Brasil",
      imagemPais: "assets/images/pais/mexico.png"
    }
  ];
  vm.calcularAproveitamento = (liga) => {
    let aproveitamento = liga.posicaoAnterior - liga.posicao;
    if (aproveitamento > 0) {
      return aproveitamento;
    } else {
      return aproveitamento * -1;
    }
  };
  vm.calcularBalancoExperiencia = () => {
    let aproveitamento = vm.perfil.expAtual - vm.perfil.expRodadaAnterior;
    if (aproveitamento < 500) {
      vm.fraseParabens = 'Boa!';
    } else if (aproveitamento < 1000) {
      vm.fraseParabens = 'Mandou bem!';
    } else {
      vm.fraseParabens = 'Excelente!!';
    }
    return aproveitamento;
  };
  vm.melhorPosicao = () => {
    let melhorPosicao = vm.ligas[0].posicao;
    angular.forEach(vm.ligas, (liga) => {
      if (liga.posicao < melhorPosicao) melhorPosicao = liga.posicao;
    });
    return melhorPosicao;
  }
}
