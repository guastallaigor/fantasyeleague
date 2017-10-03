angular
    .module('AdmFaqController', [])
    .controller('AdmFaqController', AdmFaqController)

AdmFaqController.$inject = ['FaqService', 'AdmService', '$timeout'];

function AdmFaqController(FaqService, AdmService, $timeout) {
    var vm = this;

    vm.faq = {
        pergunta: "",
        resposta: ""
    }

    vm.inserirFaq = inserirFaq;
    vm.excluirFaq = excluirFaq;
    vm.voltar = voltar;

    FaqService
        .obterFaqs()
        .then(resultado => vm.faqs = resultado.data);

    function voltar() {
        window.location.href = '/#!/layout/adm';
    }

    function inserirFaq() {
        $timeout(function() {
            AdmService.inserirFaq(vm.faq)
                .then(resultado => {
                    if (resultado.data.error) {
                        swal(
                            'Ops, algo de errado1.',
                            `${resultado.data.message}`,
                            'error'
                        );
                    }

                    FaqService.obterFaqs()
                        .then(resultado => vm.faqs = resultado.data)

                    swal('Feito!',
                        'Nova pergunta FAQ criada com sucesso',
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

    function excluirFaq(id) {
        swal({
            title: "Excluir pergunta - FAQ",
            text: "Tem certeza que deseja excluir esta pergunta da FAQ?",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#68B3C8",
            confirmButtonText: "Sim",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function() {
            $timeout(function() {
                AdmService.excluirFaq(id)
                    .then(resultado => {
                        if (resultado.data.error) {
                            swal(
                                'Ops, algo de errado1.',
                                `${resultado.data.message}`,
                                'error'
                            );
                        }

                        FaqService.obterFaqs()
                            .then(resultado => vm.faqs = resultado.data)

                        swal("Feito!",
                            "Pergunta FAQ excluída com sucesso",
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