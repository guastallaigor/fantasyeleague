angular
    .module('PerfilController', [])
    .controller('PerfilController', PerfilController);

PerfilController.$inject = ['AuthService', 'PerfilService', '$state'];

function PerfilController(AuthService, PerfilService, $state) {
    let vm = this;

    vm.existe = existe;
    vm.recursosPremium = PerfilService.recursosPremium();

    function existe(e) {
        return ((e === '') || (e === null));
    }

    AuthService.obterDadosUsuario()
        .then(res => {
            vm.perfil = res.data;
            console.log(vm.perfil)
            data = new Date(vm.perfil.nascimento * 1000);
            vm.perfil.nascimento = data

            PerfilService.obterInsignias(vm.perfil.id)
                .then(res => {
                    vm.insignias = res.data;
                });

            PerfilService.obterLiga(vm.perfil.id)
                .then(res => {
                    vm.ligas = res.data;
                });

        });



    // PerfilService.obterTime()
    //   .then(res => {
    //     vm.time = res.data;
    //   });



    // PerfilService.obterHistorico()
    //   .then(res => {
    //     vm.historico = res.data;
    //   });

    vm.excluirMembroTime = function(id) {
        swal({
                title: "Você tem certeza nesta exclusão?",
                text: "Ele poderá ser reincluído futuramente",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim",
                cancelButtonText: "Não",
                closeOnConfirm: false,
                closeOnCancel: true
            },
            function() {
                PerfilService.excluirMembroTime(id);
                swal("Membro excluído!", "O membro do seu time foi exclúido com sucesso.", "success");
            });
    };

    vm.editar = function() {
        swal({
                title: "Você tem certeza?",
                text: "Os dados do seu perfil serão alterados.",
                type: "info",
                showCancelButton: true,
                confirmButtonColor: "#68B3C8",
                confirmButtonText: "Sallet",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
                closeOnCancel: true
            },
            function() {
                vm.perfil.password = vm.novasenha;
                PerfilService.editar(vm.perfil.id, vm.perfil)
                    .then(res => {
                        swal("Salvo!", "Seu perfil foi alterado com sucesso.", "success");
                        return res;
                    });
            });
    };

    vm.solicitarServico = function(id) {
        swal({
            title: "Você tem certeza?",
            text: "Esse serviço só será executado após a confirmação do pagamento",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#68B3C8",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: true,
            closeOnCancel: true
        });
    };
    vm.virarPremium = function() {
        swal({
            title: "Você tem certeza?",
            text: "Confirmando a aquisição do Premium, você passará a ser acesso a conteúdos exclusivos",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#68B3C8",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: true,
            closeOnCancel: true
        });
    };
    /* retirado temporariamente */
    vm.carteira = function() {
        swal({
            title: "Carteira",
            text: "Você possui " + vm.perfil.saldo + " em sua conta.",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#68B3C8",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: true,
            closeOnCancel: true
        });
    };
    /* retirado temporariamente */
    vm.levelexp = function() {
        swal({
            title: "Carteira",
            text: "Você está no nível " + vm.perfil.nivel + " e possui " + vm.perfil.experiencia + " de experiência.",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#68B3C8",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: true,
            closeOnCancel: true
        });
    };

    vm.uploadImagem = function() {
        let fileInput = document.getElementById('uploadFile');
        fileInput.click();
    };

    vm.desativarConta = function() {
        PerfilService.desativarConta()
            .then(res => {
                AuthService.realizarLogout();
                $state.go('landing.login');
            }, err => {
                console.error(err);
            });
    };

}