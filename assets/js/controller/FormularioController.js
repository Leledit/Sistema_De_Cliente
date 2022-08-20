import { FormularioView } from "../view/FormularioView.js";
import { Cliente } from "../model/Cliente.js";
import { PopUpView } from "../view/PopUpView.js";
export class FormularioController{

    constructor(tabController){
        this.tabController = tabController;
        this.popUpView = new PopUpView();
        this.formularioView = new FormularioView(this);
        this.adicionarEventoAoBotaoSalvar();
        this.idCLienteQueEstaSendoAlterado = "";
    }

    adicionarEventoAoBotaoSalvar(){
        this.formularioView.adicionarEventoAoBotaoSalvar();
    }

    definirAcaoParaOBotaoSalvar(evento){
        evento.preventDefault();
        const dadosRetiradosDoFormulario = this.formularioView.recuperarDadosPresentesNoFormulario();
        
        if(dadosRetiradosDoFormulario.verificarValidacaoDosCampos()) {
            if(this.formularioView.buscarAcaoDoBotaoSalvar() == "Cadastro"){
                this.tabController.salvandoNovoClienteNaListagem(dadosRetiradosDoFormulario );
                this.popUpView.exibirPopUpNaTela("success","Sucesso ao Realizar o cadastro!");
            }else{
                dadosRetiradosDoFormulario.id = this.idCLienteQueEstaSendoAlterado;
                this.tabController.alterarInformacoesDoCliente(dadosRetiradosDoFormulario );
                this.formularioView.alterarAcaoDoBotaoSalvarParaValorPadrao();
                this.popUpView.exibirPopUpNaTela("success","Sucesso ao Realizar a alteração!");
            }
        }else{
            this.popUpView.exibirPopUpNaTela("failure","Todos os campos devem ser prenchidos!!");
        }
       this.formularioView.limparCamposDoFormulario();
    }

    editarInformacoesDoCliente(objetoCliente){
        this.formularioView.adicionarDadosDoClienteNoFormulario(objetoCliente);
        this.idCLienteQueEstaSendoAlterado = objetoCliente.id;
    }
}