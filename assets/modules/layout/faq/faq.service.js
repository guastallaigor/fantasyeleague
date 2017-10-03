angular
  .module('FaqService', [])
  .service('FaqService', FaqService);

FaqService.$inject = ['AuthService', '$http'];

function FaqService(AuthService, $http) {
  let vm = this;
  let uri = 'http://api.fantasyeleague.me';

  vm.obterFaqs = obterFaqs;

  function obterFaqs() {
    return $http({
      method: 'GET',
      url: `${uri}/faqs`
    });
  }
}
