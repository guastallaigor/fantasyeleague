angular
  .module('App', [
    /**
     * Módulos genéricos
     */
    'Routes',
    'ncy-angular-breadcrumb',
    'ngStorage',
    'AuthController',
    'AuthService',
    'Interceptor',
    'lr.upload',

    /**
     * Módulos de landing (controllers, services)
     */
    'LandingController',
    'LandingService',

    'CadastrarController',
    'CadastrarService',
    'LoginController',
    'RecuperarSenhaController',
    'RecuperarSenhaService',

    /**
     * Módulos de layout (controllers, services)
     */
    'LayoutController',
    'UsuarioService',

    'AdmController',
    'AdmService',
    'AdmControleController',
    'AdmFaqController',
    'AdmSuporteController',
    'AdmPremiumController',
    'DashboardController',
    'DashboardService',
    'EquipeAmadoraController',
    'EquipeAmadoraService',
    'EquipeAmadoraBuscarController',
    'EquipeAmadoraCriarController',
    'EscalacaoController',
    'EscalacaoService',
    'FaqController',
    'FaqService',
    'JogadorProfissionalController',
    'JogadorProfissionalService',
    'LigasController',
    'LigasService',
    'BuscarLigasController',
    'BuscarUsuariosController',
    'CriarLigasController',
    'LigasDetalhesController',
    'PerfilController',
    'PerfilService',
    'PerfilUsuarioController',
    'PerfilUsuarioService',
    'SuporteController',
    'SuporteService',

  ]);
