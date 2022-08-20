import {$} from "../main.js";
import { Cliente } from "../model/Cliente.js";
export class FormularioView{

    constructor(formularioController){
        this.campoNome = $("#campNome");
        this.campoCidade = $("#campCidade");
        this.campoSexo = $("#campSexo");
        this.btnSalvar = $("#btnSalvar");
        this.formularioController = formularioController;
    }

    adicionarEventoAoBotaoSalvar(){
        this.btnSalvar.addEventListener("click",(evento)=>{
            this.formularioController.definirAcaoParaOBotaoSalvar(evento);
        });
    }

    recuperarDadosPresentesNoFormulario(){
        return new Cliente(
            this.campoNome.value,
            this.campoCidade.value,
            this.campoSexo.value
        );
    }

    buscarAcaoDoBotaoSalvar(){
        return this.btnSalvar.textContent;
    }

    limparCamposDoFormulario(){
        this.campoNome.value = "";
        this.campoCidade.value = "";
    }

    adicionarDadosDoClienteNoFormulario(objetoCliente){
        this.campoNome.value = objetoCliente.nome;
        this.campoCidade.value = objetoCliente.cidade;
        this.campoSexo.value = objetoCliente.sexo;
        this.btnSalvar.textContent = "Edicao";
        this.btnSalvar.setAttribute("data-idCliente",objetoCliente.id);
    }

    alterarAcaoDoBotaoSalvarParaValorPadrao(){
        this.btnSalvar.textContent = "Cadastro";
    }
}

