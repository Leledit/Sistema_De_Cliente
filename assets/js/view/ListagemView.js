import {$} from "../main.js";
export class ListagemView{
   
    constructor(controladorListagem){
        this.localDeExibicaoDosClientes = $(".conteudo-listagem tbody")
        this.controladorListagem = controladorListagem;
    }
    
    rederizarItensDaListaDeClientes(listaDeClientes){
        let designerDeTodosOsItensDaListaDeClientes = "";
        listaDeClientes.forEach(cliente => {
            designerDeTodosOsItensDaListaDeClientes += this.criandoDesignerDoCLiente(cliente);
        });
        this.localDeExibicaoDosClientes.innerHTML = designerDeTodosOsItensDaListaDeClientes;
        this.adicionarEventoDeAosBotoesExcluirEditar();
    }

    criandoDesignerDoCLiente(cliente){
        return `
        <tr>
            <td>${cliente.id}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.cidade}</td>
            <td>${cliente.sexo}</td>
            <td id="${cliente.id}">
                <img src="assets/img/lata-de-lixo.png" class="img-exclusao">
                <img src="assets/img/editar.png" class="img-edicao">
            </td>
        </tr>`;
    }
    
    adicionarEventoDeAosBotoesExcluirEditar(){
        const botoesDeExclusao = $(".img-exclusao","all");
        const botoesDeEditar =  $(".img-edicao","all");
        
        botoesDeExclusao.forEach(botao =>{
            botao.addEventListener("click",(event)=>{
                this.controladorListagem.excluirClienteDaListaDeClientes(event.target.parentNode.id);
            });
        });
        botoesDeEditar.forEach(botao =>{
            botao.addEventListener("click",(event) =>{
                this.controladorListagem.recuperandoDadosDoClienteParaRealizarEdicao(event.target.parentNode.id);
            });
        });
    }
}