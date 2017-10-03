angular
  .module('LigasService', [])
  .service('LigasService', LigasService);

LigasService.$inject = ['AuthService', '$http'];

function LigasService(AuthService, $http) {
  let vm = this;
  let uri = 'http://api.fantasyeleague.me';
  let token = AuthService.obterToken();
  let options = {
    "Content-Type": "application/json",
    "Authorization": token
  };

  vm.obterLigas = obterLigas;
  vm.salvarLiga = salvarLiga;
  vm.obterUmaLiga = obterUmaLiga;

  vm.mostrarCampeoes = mostrarCampeoes;
  vm.buscarUsuarios = buscarUsuarios;
  vm.excluirUsuario = excluirUsuario;
  vm.convidarUsuario = convidarUsuario;
  vm.aceitarPedido = aceitarPedido;
  vm.recusarPedido = recusarPedido;
  vm.solicitarEntradaEmLiga = solicitarEntradaEmLiga;
  vm.entrarEmLiga = entrarEmLiga;
  vm.editarDescricao = editarDescricao;

  function obterLigas() {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/ligas`
    });
  }

  function obterUmaLiga(id) {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/ligas/${id}`
    });
  }

  function salvarLiga(liga) {
    return $http({
      method: 'POST',
      headers: options,
      url: `${uri}/ligas`,
      data: liga
    });
  }

  function mostrarCampeoes() {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/ligas/${id}`
    });
  }

  function excluirUsuario(idUsuario, idLiga) {
    return $http({
      method: 'DELETE',
      headers: options,
      url: `${uri}/ligas/${idLiga}/usuarios/${idUsuario}`
    });
  }

  function buscarUsuarios() {
    return $http({
      method: 'GET',
      headers: options,
      url: `${uri}/usuarios`
    });
  }

  function solicitarEntradaEmLiga(id) {
    return $http({
      method: 'POST',
      headers: options,
      url: `${uri}/ligas/${id}/pedidos`
    });
  }

  //ligas-buscar
  function entrarEmLiga(id) {
    return $http({
      method: 'POST',
      headers: options,
      url: `${uri}/ligas/${id}/usuarios`
    });
  }

  //ligas-buscar-usuario
  function convidarUsuario(idLiga, idUsuario) {
    return $http({
      method: 'POST',
      headers: options,
      url: `${uri}/ligas/${idLiga}/pedidos/${idUsuario}`
    });
  }

  function editarDescricao(id, descr) {
    return $http({
      method: 'PUT',
      headers: options,
      url: `${uri}/ligas/${id}`,
      data: {descricao: descr}
    });
  }

  //ligas-detalhes
  function aceitarPedido(idLiga, idUsuario) {
    return $http({
      method: 'POST',
      headers: options,
      url: `${uri}/ligas/${idLiga}/usuarios/${idUsuario}`
    });
  }

  //ligas-detalhes
  function recusarPedido(idLiga, idUsuario) {
    return $http({
      method: 'DELETE',
      headers: options,
      url: `${uri}/ligas/${idLiga}/pedidos/${idUsuario}`
    });
  }


  /*vm.buscarLigasAtivas = buscarLigasAtivas;
  vm.buscarLigas = buscarLigas;

  var ligas = [{
          id: 1727002,
          imagem: "assets/images/ligas/l2.png",
          liga: "Fear",
          posicao: "1º",
          pontuacao: 1000,
          tipo: 1,
          descricao: "",
          ativo: 1
      }, {
          id: 1727001,
          imagem: "assets/images/ligas/l1.png",
          liga: "Meat Playground",
          posicao: "2º",
          pontuacao: 1500,
          tipo: 1,
          descricao: "",
          ativo: 1
      },
      {
          id: 1727003,
          imagem: "assets/images/ligas/l3.png",
          liga: "Bot Killers",
          posicao: "6º",
          pontuacao: 600,
          tipo: 1,
          descricao: "",
          ativo: 1
      },
      {
          id: 1727001,
          liga: "Meat Playground",
          posicao: "1º",
          pontuacao: 1200,
          imagem: 'assets/images/teamlogo3.png',
          tipo: 1,
          descricao: '',
          ativo: 0
      }, {
          id: 1727002,
          liga: "Fear",
          posicao: "2º",
          pontuacao: 1000,
          imagem: 'assets/images/teamlogo4.png',
          tipo: 2,
          descricao: '',
          ativo: 0
      },
      {
          id: 1727003,
          liga: "Bot Killers",
          posicao: "3º",
          pontuacao: 600,
          imagem: 'assets/images/teamlogo1.png',
          tipo: 2,
          descricao: '',
          ativo: 0
      }
  ];

  function buscarLigas() {
      return angular.copy(ligas);
  };

  function buscarLigasAtivas() {
      var ligasAtivas = [];
      ligas.map(l => {
          if (l.ativo == 1) {
              ligasAtivas.push(l)
          }
      });
      return angular.copy(ligasAtivas);
  };

  vm.salvarLiga = function(liga) {
      console.log(liga.tipo)
      return ligas.push({
          liga: liga.nome,
          posicao: null,
          pontuacao: 0,
          imagem: 'assets/images/upload.png',
          tipo: liga.tipo,
          descricao: liga.descricao,
          ativo: 1
      })
  };*/


  /*

  LIGAS-PERFIL

  var jogador = {
      id: 1,
      imagemPerfil: "assets/images/fotos/face-0.jpg",
      nome: "Bayer",
      posicao: "AD Carry",
      apelido: "Gui",
      time: "Lolzeiros",
      brasao: "1",
      nacionalidade: "Paraguai",
      imagemPais: "assets/images/pais/paraguai.png",
      rankingCampionato: 10,
      pontuacao: 1231
  }

  var campeoes = [{
      nome: "Aatrox",
      imagem: "assets/images/campeoes/c1.png",
      itens: [{
              item: "1",
              imagem: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3098.png"
          },
          {
              item: "2",
              imagem: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3057.png"
          },
          {
              item: "3",
              imagem: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3174.png"
          }
      ]
  }, {
      nome: "Blitzcrank",
      imagem: "assets/images/campeoes/c2.png",
      itens: [{
              item: "1",
              imagem: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/2032.png"
          },
          {
              item: "2",
              imagem: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/2049.png"
          },
          {
              item: "3",
              imagem: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3097.png"
          }
      ]
  }, {
      nome: "Ezreal",
      imagem: "assets/images/campeoes/c3.png",
      itens: [{
              item: "1",
              imagem: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3083.png"
          },
          {
              item: "2",
              imagem: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3078.png"
          },
          {
              item: "3",
              imagem: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3071.png"
          }
      ]
  }]

  vm.buscarLiga = function() {
      return angular.copy(jogador)
  }*/

  /*

  LIGAS-DETALHES

  var ligas =
  [
      {
          id: 1727001,
          imagem: "assets/images/ligas/l1.png",
          nome: "Meat Playground",
          tipo: {
              privada: false,
              premium: false
          },
          descricao: "Aqui não vale chorar! Sem mimimi!",
          jogadores: [
              {
                  id: 1,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 1,
                  rankingAnterior: 3,
                  apelido: "Mr. Meat",
                  pontuacao: 1231,
                  premium: true
              },
              {
                  id: 2,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 2,
                  rankingAnterior: 1,
                  apelido: "Mr. Meat",
                  pontuacao: 1231,
                  premium: false
              },
              {
                  id: 3,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 3,
                  rankingAnterior: 4,
                  apelido: "Mr. Meat",
                  pontuacao: 1231,
                  premium: true
              },
              {
                  id: 4,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 4,
                  rankingAnterior: 2,
                  apelido: "Mr. Meat",
                  pontuacao: 1231,
                  premium: true
              },
              {
                  id: 5,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 5,
                  rankingAnterior: 5,
                  apelido: "Mr. Meat",
                  pontuacao: 1231,
                  premium: false
              }
          ]
      },
      {
          id: 1727002,
          imagem: "assets/images/ligas/l2.png",
          nome: "Fear",
          tipo: {
              privada: true,
              premium: false
          },
          descricao: "Só os fortes! Se não guenta, nem tenta!",
          jogadores: [
              {
                  id: 1,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 1,
                  rankingAnterior: 3,
                  apelido: "Gui",
                  pontuacao: 1231,
                  premium: true
              },
              {
                  id: 2,
                  imagemPerfil: "assets/images/ligas/l2.png",
                  ranking: 2,
                  rankingAnterior: 1,
                  apelido: "Mr. Fear",
                  pontuacao: 1228,
                  premium: false
              },
              {
                  id: 3,
                  imagemPerfil: "assets/images/fotos/face-2.jpg",
                  ranking: 3,
                  rankingAnterior: 4,
                  apelido: "Zézinho23",
                  pontuacao: 1200,
                  premium: false
              },
              {
                  id: 4,
                  imagemPerfil: "assets/images/fotos/face-3.jpg",
                  ranking: 4,
                  rankingAnterior: 2,
                  apelido: "Doritos",
                  pontuacao: 1180,
                  premium: true
              },
              {
                  id: 5,
                  imagemPerfil: "assets/images/fotos/face-1.jpg",
                  ranking: 5,
                  rankingAnterior: 5,
                  apelido: "Fantasy",
                  pontuacao: 900,
                  premium: true
              }
          ]
      },
      {
          id: 1727003,
          imagem: "assets/images/ligas/l3.png",
          nome: "Bot Killers",
          tipo: {
              privada: false,
              premium: true
          },
          descricao: "NO MERCY!",
          jogadores: [
              {
                  id: 1,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 1,
                  rankingAnterior: 3,
                  apelido: "Goku14",
                  pontuacao: 1231,
                  premium: true
              },
              {
                  id: 2,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 2,
                  rankingAnterior: 1,
                  apelido: "Goku14",
                  pontuacao: 1231,
                  premium: true
              },
              {
                  id: 3,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 3,
                  rankingAnterior: 4,
                  apelido: "Goku14",
                  pontuacao: 1231,
                  premium: true
              },
              {
                  id: 4,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 4,
                  rankingAnterior: 2,
                  apelido: "Goku14",
                  pontuacao: 1231,
                  premium: true
              },
              {
                  id: 5,
                  imagemPerfil: "assets/images/fotos/face-0.jpg",
                  ranking: 5,
                  rankingAnterior: 5,
                  apelido: "Goku14",
                  pontuacao: 1231,
                  premium: true
              }
          ]
      }
  ]

  var buscouBackend = function(id) {
      if (id == 1727003) {
          return angular.copy(ligas[2])
      } else if (id == 1727002) {
          return angular.copy(ligas[1])
      } else if (id == 1727001) {
          return angular.copy(ligas[0])
      }
  }

  var deletouBackend = function(idUsuario, idLiga){
      if (idLiga == 1727003) {
          for(var i=0; i < ligas[2].jogadores.length; i++){
              if(idUsuario==ligas[2].jogadores[i].id){
                  return ligas[2].jogadores.splice(i, 1)
              }
          }
      } else if (idLiga == 1727002) {
          for(var i=0; i < ligas[1].jogadores.length; i++){
              if(idUsuario==ligas[1].jogadores[i].id){
                  return ligas[1].jogadores.splice(i, 1)
              }
          }
      } else if (idLiga == 1727001) {
          for(var i=0; i < ligas[0].jogadores.length; i++){
              if(idUsuario==ligas[0].jogadores[i].id){
                  return ligas[0].jogadores.splice(i, 1)
              }
          }
      }
  }

  vm.buscarLiga = function(id) {
      return buscouBackend(id)
  }

  vm.mostrarCampeoes = function() {
      return angular.copy(campeoes)
  }

  vm.excluirUsuario = function(idUsuario, idLiga){
      return deletouBackend(idUsuario, idLiga)
  }

  vm.buscarUsuarios = function() {
      return angular.copy(ligas[1].jogadores)
  }*/
}
