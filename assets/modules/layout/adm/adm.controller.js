angular
    .module('AdmController', [])
    .controller('AdmController', AdmController)

AdmController.$inject = ['AdmService', '$timeout'];

function AdmController(AdmService, $timeout) {
    var vm = this;

    vm.resolverContato = resolverContato;

    /*AdmService.obterMensagensSuporte()
        .then(resultado => vm.suportes = resultado.data)*/

    AdmService.obterMensagensContato()
        .then(resultado => vm.contatos = resultado.data)

    /*function resolverSuporte(suporte) {
        swal({
            title: "Marcar como resolvida",
            text: "Tem certeza que deseja marcar esta mensagem como resolvida?",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#68B3C8",
            confirmButtonText: "Sim",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function() {
            $timeout(function() {
                AdmService.resolverSuporte(suporte)
                    .then(resultado => {
                        if (resultado.data.error) {
                            swal(
                                'Ops, algo de errado1.',
                                `${resultado.data.message}`,
                                'error'
                            );
                        }

                        AdmService.obterMensagensSuporte()
                            .then(resultado => vm.suportes = resultado.data)

                        swal("Feito!",
                            "Mensagem marcada como resolvida!",
                            "success");
                    })
                    .catch(resultado => {
                        if (resultado.data != undefined) {
                            swal(
                                'Erro!1',
                                `${resultado.data.message}`,
                                'error'
                            );
                        }
                        swal(
                            'Erro!2',
                            '',
                            'error'
                        );
                    });
            });
        });
    }*/

    function resolverContato(contato) {
        swal({
            title: "Marcar como resolvido",
            text: "Tem certeza que deseja marcar esta mensagem como resolvida?",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#68B3C8",
            confirmButtonText: "Sim",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function() {
            $timeout(function() {
                AdmService.resolverContato(contato)
                    .then(resultado => {
                        if (resultado.data.error) {
                            swal(
                                'Ops, algo de errado1.',
                                `${resultado.data.message}`,
                                'error'
                            );
                        }

                        AdmService.obterMensagensContato()
                            .then(resultado => vm.contatos = resultado.data)

                        swal("Feito!",
                            "Mensagem marcada como resolvida!",
                            "success");
                    })
                    .catch(resultado => {
                        if (resultado.data != undefined) {
                            swal(
                                'Erro!1',
                                `${resultado.data.message}`,
                                'error'
                            );
                        }
                        swal(
                            'Erro!2',
                            '',
                            'error'
                        );
                    });
            });
        });
    }
}