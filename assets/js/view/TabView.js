import { $ } from "../main.js";
export class TabView{

    constructor(tabController){
        this.tabController = tabController;
        this.tabDoFormulario = $("#header-formulario");
        this.tabDaListagem = $("#header-listagem");
        this.localDoFormulario = $(".conteudo-formulario");
        this.localDaListagem = $(".conteudo-listagem");
    }

    adicionarEventoAosBotoesDoTab(){
        this.tabDoFormulario.addEventListener("click",()=>{
            this.tabController.tratarEventoDeClickNoTabFormulario();
        });
        this.tabDaListagem.addEventListener("click",()=>{
            this.tabController.tratarEventoDeClickNoTabListagem();
        });
    }

    exibirPaginaReferenteAoFormulario(){
        this.tabDoFormulario.classList.remove("btnDesativo");
        this.tabDaListagem.classList.add("btnDesativo");
        this.localDoFormulario.style.display = "block";
        this.localDaListagem.style.display = "none";
    }

    exibirPaginaReferenteAListagem(){
        this.tabDaListagem.classList.remove("btnDesativo");
        this.tabDoFormulario.classList.add("btnDesativo");
        this.localDaListagem.style.display  = "block"; 
        this.localDoFormulario.style.display = "none";
    }
}