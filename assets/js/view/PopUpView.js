import {$} from "../main.js";
export class PopUpView{

    constructor(){
        this.localExibicaoPopUp = $(".janelaModal");
        this.localMensagemPopUp = $(".janelaModal section:first-child");
    }

    exibirPopUpNaTela(tipo,titulo){
        let tipoDePopUp = "";
        
        if(tipo == "success"){
            tipoDePopUp = "janelaModalSucess";
        }else{
            tipoDePopUp = "janelaModalFall";
        }

        if(this.localExibicaoPopUp.classList.length > 1){
            let classPresentesNoPopUP = this.localExibicaoPopUp.classList.value;
            let arrayContendoAsClassesDoPopUp = classPresentesNoPopUP.split(" ");
            this.localExibicaoPopUp.classList.remove(arrayContendoAsClassesDoPopUp[1]);
        }
      
        this.localExibicaoPopUp.classList.add(tipoDePopUp);
        this.localExibicaoPopUp.style.display = "Block";
        this.localMensagemPopUp.innerHTML = titulo;
        this.adicionarEventoAoBotaoFecharPopUp();  
    }

    adicionarEventoAoBotaoFecharPopUp(){
        const localbtnFecharPopUp = $("#btnFecharPopUp");
        localbtnFecharPopUp.addEventListener("click", (evento)=>{
            this.localExibicaoPopUp.style.display = "none";
        });
    }
}