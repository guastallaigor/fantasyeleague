angular
.module('AdmPremiumController', [])
.controller('AdmPremiumController', AdmPremiumController)

AdmPremiumController.$inject = ['AdmService', '$timeout'];

function AdmPremiumController(AdmService, $timeout) {
var vm = this;

vm.inserirRecursoPremium = inserirRecursoPremium;
vm.excluirRecursoPremium = excluirRecursoPremium;
vm.voltar = voltar;

AdmService.obterRecursosPremium()
    .then(resultado => vm.recursos = resultado.data);

function voltar() {
    window.location.href = '/#!/layout/adm';
}

function inserirRecursoPremium(recurso) {
    $timeout(function() {
        AdmService.inserirRecursoPremium(recurso)
            .then(resultado => {
                if (resultado.data.error) {
                    swal(
                        'Ops, algo de errado1.',
                        `${resultado.data.message}`,
                        'error'
                    );
                }

                AdmService.obterRecursosPremium()
                    .then(resultado => vm.recursos = resultado.data);

                swal('Feito!',
                    'Novo recurso premium criado com sucesso',
                    "success");
            })
            .catch(resultado => {
                if (resultado.data != undefined) {
                    if ((resultado.data.error) || (resultado.status === 404)) {
                        swal(
                            'Ops, algo de errado2.',
                            `${resultado.data.message}`,
                            'error'
                        );
                    }
                }
                swal(
                    'Ops, algo de errado3.',
                    '',
                    'error'
                );
            });
    });
}

function excluirRecursoPremium(id) {
    swal({
        title: "Excluir recurso premium",
        text: "Tem certeza que deseja excluir este recurso premium?",
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#68B3C8",
        confirmButtonText: "Sim",
        cancelButtonText: "Cancelar",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function() {
        $timeout(function() {
            AdmService.excluirRecursoPremium(id)
                .then(resultado => {
                    if (resultado.data.error) {
                        swal(
                            'Ops, algo de errado1.',
                            `${resultado.data.message}`,
                            'error'
                        );
                    }

                    AdmService.obterRecursosPremium()
                        .then(resultado => vm.recursos = resultado.data);

                    swal("Feito!",
                        "Recurso premium excluído com sucesso.",
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