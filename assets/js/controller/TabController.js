import { TabView } from "../view/TabView.js";
import { FormularioController } from "./FormularioController.js";
import { ListagemController } from "./ListagemController.js";

export class TabController{

    constructor(){
        this.formularioController = new FormularioController(this);
        this.listagemController = new ListagemController(this);
        this.tabView = new TabView(this);

        this.adicionarEventoAosBotoesDoTab();
    }

    adicionarEventoAosBotoesDoTab(){
        this.tabView.adicionarEventoAosBotoesDoTab();
    }

    tratarEventoDeClickNoTabFormulario(){
        this.exibirPaginaDeFormulario();
    }

    tratarEventoDeClickNoTabListagem(){
        this.exibirPaginaDeListagem();
    }

    exibirPaginaDeListagem(){
        this.tabView.exibirPaginaReferenteAListagem();
    }

    exibirPaginaDeFormulario(){
        this.tabView.exibirPaginaReferenteAoFormulario();
    }

    salvandoNovoClienteNaListagem(instanciaCliente){
        this.listagemController.salvandoNovoClienteNaListagem(instanciaCliente);
        this.exibirPaginaDeListagem();
    }

    alterarInformacoesDoCliente(instanciaDoCliente){
        this.listagemController.alterarInformacoesDoCliente(instanciaDoCliente);
        this.exibirPaginaDeListagem();
    }

    editarInformacoesDoCliente(objetoComOsDadosDocliente){
        this.formularioController.editarInformacoesDoCliente(objetoComOsDadosDocliente);
        this.exibirPaginaDeFormulario();
    }
}