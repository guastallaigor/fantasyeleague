angular
    .module('AdmControleController', [])
    .controller('AdmControleController', AdmControleController)

    AdmControleController.$inject = ['AdmService', '$filter', '$timeout'];

function AdmControleController(AdmService, $filter, $timeout) {
    var vm = this;
    var aux = "";
    var aux2 = "";

    vm.existe = existe
    vm.voltar = voltar
    vm.banirDesbanirUsuario = banirDesbanirUsuario
    vm.promoverRebaixarUsuario = promoverRebaixarUsuario

    AdmService.obterUsuarios()
        .then(resultado => vm.usuarios = resultado.data)

    function existe(e) {
        var result = $filter('filter')(vm.usuarios, e);
        if (result != undefined) {
            return (result.length !== 0);
        } else return 0;
        //return ((e === '') || (e === null));
    }

    function voltar() {
        window.location.href = '/#!/layout/adm';
    }

    function promoverRebaixarUsuario(usuario) {
        usuario.funcao === 'usuario' ? aux = 'Promover para administrador' : aux = 'Rebaixar para usuário';

        swal({
            title: aux,
            text: "Tem certeza que deseja " + aux.toLowerCase() + " o usuário: " + usuario.username + "?",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#68B3C8",
            confirmButtonText: "Sim",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function() {
            $timeout(function() {
                AdmService.promoverRebaixarUsuario(usuario)
                    .then(resultado => {
                        if (resultado.data != undefined) {
                            if (resultado.data.error) {
                                swal(
                                    'Ops, algo de errado.',
                                    `${resultado.data.message}`,
                                    'error'
                                );
                            }
                        }

                        usuario.funcao === 'usuario' ? aux2 = 'Promovido para administrador' : aux2 = 'Rebaixado para usuário';
                        usuario.funcao === 'usuario' ? usuario.funcao = 'adm' : usuario.funcao = 'usuario';

                        swal("Feito!",
                            aux2 + " com sucesso",
                            "success");
                    })
                    .catch(resultado => {
                        if (resultado.data != undefined) {
                            swal(
                                'Ops, algo de errado.',
                                `${resultado.data.message}`,
                                'error'
                            );
                        }
                    })
            });
        });
    };

    function banirDesbanirUsuario(usuario) {
        usuario.banido ? aux = 'Desbanir' : aux = 'Banir';

        swal({
            title: aux + " usuário",
            text: "Tem certeza que deseja " + aux.toLowerCase() + " este usuario?",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#68B3C8",
            confirmButtonText: "Sim",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function() {
            $timeout(function() {
                AdmService.banirDesbanirUsuario(usuario)
                    .then(resultado => {
                        if (resultado.data != undefined) {
                            if (resultado.data.error) {
                                swal(
                                    'Ops, algo de errado.',
                                    `${resultado.data.message}`,
                                    'error'
                                );
                            }
                        }

                        usuario.banido ? aux2 = 'desbanido' : aux2 = 'banido';
                        usuario.banido = !usuario.banido;

                        swal("Feito!",
                            "Usuário " + aux2 + " com sucesso",
                            "success");
                    })
                    .catch(resultado => {
                        if (resultado.data != undefined) {
                            swal(
                                'Ops, algo de errado.',
                                `${resultado.data.message}`,
                                'error'
                            );
                        }
                    })
            });
        });
    };
}