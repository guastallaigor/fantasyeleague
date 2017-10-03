angular
  .module('EquipeAmadoraService', [])
  .service('EquipeAmadoraService', EquipeAmadoraService);

EquipeAmadoraService.$inject = ['AuthService', '$http'];

function EquipeAmadoraService(AuthService, $http) {
  let vm = this;
  let uri = 'http://api.fantasyeleague.me';
  let token = AuthService.obterToken();
  let options = {
    "Content-Type": "application/json",
    "Authorization": token
  };

  vm.buscarEquipesAmadoras = buscarEquipesAmadoras;

  //alterar os dados para apresentação
  let equipes = [{
    imagem: "assets/images/equipes/nexus.png",
    nome: "Nexus",
    descricao: "Somos o nexus ninguém é melhor que nós!",
    ativo: 1
  }, {
    imagem: "assets/images/equipes/t1.jpg",
    nome: "SKT T1",
    descricao: "Nós somos os melhores jogadores de League of Legends do mundo!",
    ativo: 1
  },
    {
      imagem: "assets/images/equipes/ig.png",
      nome: "Invictus Gaming",
      descricao: "Somos invencíveis em qualquer jogo",
      ativo: 1
    },
    {
      imagem: 'assets/images/equipes/cloud9.png',
      nome: "Cloud 9",
      descricao: 'Classic C9 gaming',
      ativo: 1
    },
    {
      imagem: 'assets/images/equipes/tiger.png',
      nome: "Tiger",
      tipo: 2,
      descricao: 'Tigre voraz 4head!',
      ativo: 1
    }
  ];

  let aux = [{
    id: 1,
    nome: 'Igor',
    apelido: 'Igor',
    imagem: 'assets/images/fotos/face-3.jpg',
    carteira: 10.10,
    ligas: 3,
    experiencia: 254,
    level: 5,
    conviteenviado: false,
    ativo: 1,
    mesmaequipe: true
  },
    {
      id: 2,
      nome: 'Zorak',
      apelido: 'Zorak',
      imagem: 'assets/images/fotos/face-1.jpg',
      carteira: 10.10,
      ligas: 3,
      experiencia: 254,
      level: 5,
      conviteenviado: false,
      ativo: 1,
      mesmaequipe: true
    },
    {
      id: 3,
      nome: 'Anti Mage',
      apelido: 'Anti Mage',
      imagem: 'assets/images/fotos/face-4.jpg',
      carteira: 11.10,
      ligas: 4,
      experiencia: 255,
      level: 6,
      conviteenviado: false,
      ativo: 1,
      mesmaequipe: false
    },
    {
      id: 4,
      nome: 'Juggernaut',
      apelido: 'Juggernaut',
      imagem: 'assets/images/fotos/face-5.jpg',
      carteira: 12.10,
      ligas: 5,
      experiencia: 256,
      level: 7,
      conviteenviado: false,
      ativo: 1,
      mesmaequipe: false
    }
  ];

  let perfis = [];
  let perfiscriar = [];

  function buscarEquipesAmadoras() {
    return angular.copy(equipes);
  }

  vm.buscarPerfisCriar = function () {
    j = 0;
    for (i = 0; i < aux.length; i++) {
      if (aux[i].ativo === 1) {
        if (!(aux[i].mesmaequipe)) {
          perfiscriar[j] = aux[i];
          console.log(perfiscriar[j])
          //j++;
        }
      }
    }
    console.log("-----------")
    console.log(perfiscriar)
    return angular.copy(perfiscriar);
  };

  vm.buscarPerfis = function () {
    k = 0;
    for (i = 0; i < aux.length; i++) {
      if (aux[i].ativo === 1) {
        if (aux[i].mesmaequipe) {
          console.log(aux[i]);
          perfis[k] = aux[i];
          k++;
        }
      }
    }
    return angular.copy(perfis);
  };

  vm.salvarEquipeAmadora = function (equipe) {
    console.log(equipe)
    return equipes.push({
      equipe: equipe.nome,
      imagem: 'assets/images/upload.png',
      descricao: equipe.descricao,
      ativo: 1
    })
  };

  vm.mostrarEquipe = function () {
    return angular.copy(equipes[1]);
  };

  vm.excluirJogador = function (j) {
    for (i = 0; i < aux.length; i++) {
      if (j.id === aux[i].id) {
        aux[i].ativo = 0;
        j.ativo = 0;
      }
    }
  }
}
