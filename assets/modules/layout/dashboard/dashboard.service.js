angular.module('DashboardService', [])
    .service('DashboardService', DashboardService);

DashboardService.$inject = ['AuthService', '$http'];

function DashboardService(AuthService, $http) {
  let vm = this;
  let uri = 'http://api.fantasyeleague.me';
  let token = AuthService.obterToken();
  let options = {
    "Content-Type": "application/json",
    "Authorization": token
  };

    vm.buscarJogadores = buscarJogadores;
    vm.buscarLigas = buscarLigas;
    vm.buscarPerfil = buscarPerfil;

    vm.perfil = {
        nivel: 5,
        carteira: 500,
        quantidadeLigas: 3,
        balanco: -50,
        expAtual: 12,
        expProxNivel: 200,
        expRodadaAnterior: 11
    };
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

    function buscarPerfil() {
        return angular.copy(vm.perfil);
    }

    function buscarJogadores() {
        return angular.copy(vm.jogadores);
    }

    function buscarLigas() {
        return angular.copy(vm.ligas);
    }
}
