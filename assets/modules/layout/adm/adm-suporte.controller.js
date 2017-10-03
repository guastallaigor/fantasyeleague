angular
    .module('AdmSuporteController', [])
    .controller('AdmSuporteController', AdmSuporteController)

AdmSuporteController.$inject = ['AdmService'];

function AdmSuporteController(AdmService) {
    var vm = this;

    vm.inserirCategoria = inserirCategoria;
    vm.excluirCategoria = excluirCategoria;
    vm.voltar = voltar;

    AdmService.obterCategorias()
        .then(resultado => vm.categorias = resultado.data)

    function voltar() {
        window.location.href = '/#!/layout/adm';
    }

    function inserirCategoria(categoria){
        AdmService.inserirCategoria(categoria)
            .then(resultado => {
                if (resultado.data.error) {
                    swal(
                        'Ops, algo de errado.',
                        `${resultado.data.message}`,
                        'error'
                    );
                }

                swal('Feito!',
                'Nova categoria criada com sucesso',
                "success");
            })
            .catch(resultado => {
                if ((resultado.data.error) || (resultado.status === 404)) {
                    swal(
                        'Ops, algo de errado.',
                        `${resultado.data.message}`,
                        'error'
                    );
                }
            });
        }

    function excluirCategoria(id){
        swal({
            title: "Excluir categoria -Suporte",
            text: "Tem certeza que deseja excluir esta categoria do Suporte?",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#68B3C8",
            confirmButtonText: "Sim",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function() {
            $timeout(function() {
                AdmService.excluirCategoria(id)
                    .then(resultado => {
                        if (resultado.data.error) {
                            swal(
                                'Ops, algo de errado.',
                                `${resultado.data.message}`,
                                'error'
                            );
                        }

                        AdmService.obterCategorias()
                            .then(resultado => vm.categorias = resultado.data)

                        swal("Feito!",
                            "Pergunta categoria excluída com sucesso",
                            "success");
                    })
                    .catch(resultado => {
                        swal(
                            'Ops, algo de errado.',
                            `${resultado.data.message}`,
                            'error'
                        );
                    })
            });
        });
    }
}