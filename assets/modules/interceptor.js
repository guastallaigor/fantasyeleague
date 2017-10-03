angular
  .module('Interceptor', [])
  .factory('Interceptor', Interceptor)
  .config(ConfigInterceptor);

function ConfigInterceptor($httpProvider) {
  $httpProvider.interceptors.push('Interceptor');
}

Interceptor.$inject = ['$injector'];

function Interceptor($injector) {
  return {
    request: onRequest,
    response: onResponse,
    requestError: onRequestError,
    responseError: onResponseError
  };

  function onRequest(config) {
    config.headers = config.headers || {};
    let AuthService = $injector.get('AuthService');

    if (AuthService.obterToken()) {
      config.headers['Authorization'] = AuthService.obterToken();
    }

    return config;
  }

  function onResponse(response) {
    return response;
  }

  function onRequestError(rejection) {
    return $q.reject(rejection);
  }

  function onResponseError(rejection) {
    let $state = $injector.get('$state');
    let $q = $injector.get('$q');

    if (rejection.status === 401 || rejection.status === 403) {
      $state.go('landing.login');
    }

    return $q.reject(rejection);
  }
}
