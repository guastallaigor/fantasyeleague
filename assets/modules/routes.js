angular
  .module('Routes', ['ui.router'])
  .config(Configurations);

Configurations.$inject = ['$stateProvider', '$urlRouterProvider'];

function Configurations($stateProvider, $urlRouterProvider) {
  $stateProvider

  /**
   * Configurações de rotas para módulos de layout, lembrando
   * que um submódulo deve utilizar o prefixo (layout.)
   */
    .state('layout', {
      url: '/layout',
      controller: 'LayoutController as vm',
      templateUrl: 'assets/modules/layout/layout.html',
      resolve: {
        estaAutenticado: (AuthService, $timeout, $state) => {

          /* Caso não haja JWT no localstorage, redireciona para login */
          if (!AuthService.estaAutenticado()) {
            $timeout(() => $state.go('landing.login'));
          }
        }
      }
    })
    .state('layout.perfil', {
      url: '/perfil',
      controller: 'PerfilController as vm',
      templateUrl: 'assets/modules/layout/perfil/perfil.html',
      ncyBreadcrumb: {
        label: 'Perfil'
      }
    })
    .state('layout.suporte', {
      url: '/suporte',
      controller: 'SuporteController as vm',
      templateUrl: 'assets/modules/layout/suporte/suporte.html',
      ncyBreadcrumb: {
        label: 'Suporte'
      }
    })
    .state('layout.dashboard', {
      url: '/dashboard',
      controller: 'DashboardController as vm',
      templateUrl: 'assets/modules/layout/dashboard/dashboard.html',
      ncyBreadcrumb: {
        label: 'Dashboard'
      }
    })
    .state('layout.ligas', {
      url: '/ligas',
      controller: 'LigasController as vm',
      templateUrl: 'assets/modules/layout/ligas/ligas.html',
      ncyBreadcrumb: {
        label: 'Ligas'
      }
    })
    .state('layout.ligas-buscar', {
      url: '/ligas/buscar',
      controller: 'BuscarLigasController as vm',
      templateUrl: 'assets/modules/layout/ligas/ligas-buscar.html',
      ncyBreadcrumb: {
        label: 'Ligas / Buscar'
      }
    })
    .state('layout.ligas-criar', {
      url: '/ligas/criar',
      controller: 'CriarLigasController as vm',
      templateUrl: 'assets/modules/layout/ligas/ligas-criar.html',
      ncyBreadcrumb: {
        label: 'Ligas / Criar'
      }
    })
    .state('layout.ligas-detalhes', {
      url: '/ligas/detalhes/:id',
      controller: 'LigasDetalhesController as vm',
      templateUrl: 'assets/modules/layout/ligas/ligas-detalhes.html',
      ncyBreadcrumb: {
        label: 'Ligas / Detalhes'
      }
    })
    .state('layout.ligas-encontrar-usuarios', {
      url: '/ligas/encontrarusuarios/:id',
      controller: 'BuscarUsuariosController as vm',
      templateUrl: 'assets/modules/layout/ligas/ligas-buscar-usuarios.html',
      ncyBreadcrumb: {
        label: 'Ligas / Encontrar Usuários'
      }
    })
    .state('layout.jogador-profissional', {
      url: '/jogadorprofissional/:id',
      controller: 'JogadorProfissionalController as vm',
      templateUrl: 'assets/modules/layout/jogador-profissional/jogador-profissional.html',
      ncyBreadcrumb: {
        label: 'Jogador Profissional'
      }
    })
    .state('layout.perfil-usuario', {
      url: '/perfilusuario/:id',
      controller: 'PerfilUsuarioController as vm',
      templateUrl: 'assets/modules/layout/perfil/perfil-usuario.html',
      ncyBreadcrumb: {
        label: 'Perfil do Usuário'
      }
    })
    .state('layout.escalacao', {
      url: '/escalacao',
      controller: 'EscalacaoController as vm',
      templateUrl: 'assets/modules/layout/escalacao/escalacao.html',
      ncyBreadcrumb: {
        label: 'Escalação profissional'
      }
    })
    .state('layout.faq', {
      url: '/faq',
      controller: 'FaqController as vm',
      templateUrl: 'assets/modules/layout/faq/faq.html',
      ncyBreadcrumb: {
        label: 'Frequently Asked Questions'
      }
    })
    .state('layout.equipeamadorabuscar', {
      url: '/equipeamadorabuscar',
      controller: 'EquipeAmadoraBuscarController as vm',
      templateUrl: 'assets/modules/layout/equipe-amadora/equipe-amadora-buscar.html',
      ncyBreadcrumb: {
        label: 'Equipe Amadora / Buscar'
      }
    })
    .state('layout.equipeamadoracriar', {
      url: '/equipeamadoracriar',
      controller: 'EquipeAmadoraCriarController as vm',
      templateUrl: 'assets/modules/layout/equipe-amadora/equipe-amadora-criar.html',
      ncyBreadcrumb: {
        label: 'Equipe Amadora / Criar'
      }
    })
    .state('layout.equipeamadora', {
      url: '/equipeamadora',
      controller: 'EquipeAmadoraController as vm',
      templateUrl: 'assets/modules/layout/equipe-amadora/equipe-amadora.html',
      ncyBreadcrumb: {
        label: 'Equipe Amadora'
      }
    })
    .state('layout.adm', {
      url: '/adm',
      controller: 'AdmController as vm',
      templateUrl: 'assets/modules/layout/adm/adm.html',
      ncyBreadcrumb: {
        label: 'Administração'
      }
    })
    .state('layout.adm-controle', {
      url: '/admcontrole',
      controller: 'AdmControleController as vm',
      templateUrl: 'assets/modules/layout/adm/adm-controle.html',
      ncyBreadcrumb: {
        label: 'Administração / Controle de usuários'
      }
    })
    .state('layout.adm-faq', {
      url: '/admfaq',
      controller: 'AdmFaqController as vm',
      templateUrl: 'assets/modules/layout/adm/adm-faq.html',
      ncyBreadcrumb: {
        label: 'Administração / FAQ'
      }
    })
    .state('layout.adm-suporte', {
      url: '/admsuporte',
      controller: 'AdmSuporteController as vm',
      templateUrl: 'assets/modules/layout/adm/adm-suporte.html',
      ncyBreadcrumb: {
        label: 'Administração / Suporte'
      }
    })
    .state('layout.adm-premium', {
      url: '/admpremium',
      controller: 'AdmPremiumController as vm',
      templateUrl: 'assets/modules/layout/adm/adm-premium.html',
      ncyBreadcrumb: {
        label: 'Administração / Premium'
      }
    })

    /**
     * Configurações de rotas para módulos de layout, atualmente
     * apenas para login e registro.
     */
    .state('landing', {
      url: '/landing',
      controller: 'LandingController as vm',
      templateUrl: 'assets/modules/landing/landing.html'
    })
    .state('landing.cadastrar', {
      url: '/cadastrar',
      controller: 'CadastrarController as vm',
      templateUrl: 'assets/modules/landing/cadastrar/cadastrar.html'
    })
    .state('landing.recuperarSenha', {
      url: '/recuperarSenha',
      controller: 'RecuperarSenhaController as vm',
      templateUrl: 'assets/modules/landing/recuperarSenha/recuperarSenha.html'
    })
    .state('landing.login', {
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'assets/modules/landing/login/login.html'
    });

  $urlRouterProvider.otherwise('landing/login');
}
