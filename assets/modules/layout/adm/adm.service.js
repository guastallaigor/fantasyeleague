angular
    .module('AdmService', [])
    .service('AdmService', AdmService)

AdmService.$inject = ['$http'];

function AdmService($http) {
    var vm = this;
    var uri = 'http://api.fantasyeleague.me';

    vm.inserirFaq = inserirFaq;
    vm.excluirFaq = excluirFaq;
    vm.inserirCategoria = inserirCategoria;
    vm.excluirCategoria = excluirCategoria;
    vm.obterCategorias = obterCategorias;
    vm.obterMensagensSuporte = obterMensagensSuporte;
    vm.obterMensagensContato = obterMensagensContato;
    vm.resolverSuporte = resolverSuporte;
    vm.resolverContato = resolverContato;
    vm.obterUsuarios = obterUsuarios;
    vm.banirDesbanirUsuario = banirDesbanirUsuario;
    vm.inserirRecursoPremium = inserirRecursoPremium;
    vm.excluirRecursoPremium = excluirRecursoPremium;
    vm.obterRecursosPremium = obterRecursosPremium;
    vm.promoverRebaixarUsuario = promoverRebaixarUsuario;

    /**
     * @todo Mover método para serviço de Faq
     * @param {object} faq
     */
    function inserirFaq(faq) {
      return $http({
        method: 'POST',
        url: `${uri}/faqs`,
        data: faq
      });
    }


    /**
     * @todo Mover método para serviço de Faq
     * @param {string} id
     */
    function excluirFaq(id) {
      return $http({
        method: 'DELETE',
        url: `${uri}/faqs/${id}`,
        data: id
      });
    }


    /**
     * @todo Mover método para serviço de Categoria
     * @param {object} categoria
     */
    function inserirCategoria(categoria) {
      return $http({
        method: 'POST',
        url: `${uri}/suporte/categorias`,
        data: categoria
      });
    }


    /**
     * @todo Mover método para serviço de Categoria
     * @param {string} id
     */
    function excluirCategoria(id) {
      return $http({
        method: 'DELETE',
        url: `${uri}/suporte/categorias/${id}`,
        data: id
      });
    }


    /**
     * @todo Mover método para serviço de Categoria
     */
    function obterCategorias() {
      return $http({
        method: 'GET',
        url: `${uri}/suporte/categorias`
      });
    }


    /**
     * @todo Mover método para serviço de Suporte
     */
    function obterMensagensSuporte() {
        return $http({
            method: 'GET',
            url: `${uri}/suportes`
        });
    }


    /**
     * @todo Mover método para serviço de Contato
     */
    function obterMensagensContato() {
        return $http({
            method: 'GET',
            url: `${uri}/contatos`
        });
    }


    /**
     * @todo Mover método para serviço de Suporte
     * @param {object} suporte
     */
    function resolverSuporte(suporte) {
        return $http({
            method: 'PUT',
            url: `${uri}/suportes`,
            data: suporte
        });
    }

    /**
     * @todo Mover método para serviço de Contato
     * @param {object} contato
     */
    function resolverContato(contato) {
        return $http({
            method: 'PUT',
            url: `${uri}/contatos`,
            data: contato

        })
    }

    /**
     * @todo Mover método para serviço de Usuário
     */
    function obterUsuarios() {
        return $http({
            method: 'GET',
            url: `${uri}/usuarios/todos`
        });
    }


    /**
     * @todo Mover método para serviço de Usuário
     * @param {object} usuario
     */
    function banirDesbanirUsuario(usuario) {
      if (usuario.banido) {
        return $http({
          method: 'POST',
          url: `${uri}/usuarios/desbanir/${usuario.username}`,
          data: usuario.username
        });
      }

      return $http({
        method: 'POST',
        url: `${uri}/usuarios/banir/${usuario.username}`,
        data: usuario.username
      });
    }


    /**
     * Mover método para serviço de Usuário
     * @param {object} usuario
     */
    function promoverRebaixarUsuario(usuario) {
        if(usuario.funcao === 'usuario'){
            return $http({
                method: 'POST',
                url: `${uri}/usuarios/promover/${usuario.username}`,
                data: usuario.username
            });
        }
        return $http({
            method: 'POST',
            url: `${uri}/usuarios/rebaixar/${usuario.username}`,
            data: usuario.username
        });
    }

    function inserirRecursoPremium(recurso) {
        return $http({
            method: 'POST',
            url: `${uri}/premium`,
            data: recurso
        });
    }

    function excluirRecursoPremium(id) {
        return $http({
            method: 'DELETE',
            url: `${uri}/premium/${id}`,
            data: id
        });
    }

    function obterRecursosPremium(){
        return $http({
            method: 'GET',
            url: `${uri}/premium`
        });
    }
}
