import { Cliente } from "../model/Cliente.js";
import { ListagemView } from "../view/ListagemView.js";
import { PopUpView } from "../view/PopUpView.js";

export class ListagemController{

    listaDeCLientes = [];

    constructor(tabController){
        this.tabController = tabController;
        this.listagemView = new ListagemView(this);
        this.popUpView = new PopUpView();
        this.adicionarClientesIniciaisNaListagem();
    }

    salvandoNovoClienteNaListagem(cliente){
        this.listaDeCLientes.push(cliente);
        this.listagemView.rederizarItensDaListaDeClientes(this.listaDeCLientes);
    }

    adicionarClientesIniciaisNaListagem(){
        this.salvandoNovoClienteNaListagem(new Cliente("Leandro","Mococa-sp","Masculino"));
        this.salvandoNovoClienteNaListagem(new Cliente("Carol","Mococa-sp","Ferminio"));
        this.salvandoNovoClienteNaListagem(new Cliente("Juliana","Mococa-sp","Ferminio"));
    }

    alterarInformacoesDoCliente(clienteComDadosAlterados){
        let posicaoClienteNaLista = this.buscarPosicaoDoClienteBaseadoNoId(clienteComDadosAlterados.id);
        
        this.listaDeCLientes[posicaoClienteNaLista].nome = clienteComDadosAlterados.nome;
        this.listaDeCLientes[posicaoClienteNaLista].cidade = clienteComDadosAlterados.cidade;
        this.listaDeCLientes[posicaoClienteNaLista].sexo = clienteComDadosAlterados.sexo;
        this.tabController.exibirPaginaDeListagem();
        this.listagemView.rederizarItensDaListaDeClientes(this.listaDeCLientes);
    }

    recuperandoDadosDoClienteParaRealizarEdicao(idCliente){
        let objetoComOsDadosDocliente = this.listaDeCLientes[this.buscarPosicaoDoClienteBaseadoNoId(idCliente)];
        this.tabController.editarInformacoesDoCliente(objetoComOsDadosDocliente);
    }

    buscarPosicaoDoClienteBaseadoNoId(idCliente){ 
        let posicaoClienteNaLista;
        for(let i = 0; i < this.listaDeCLientes.length; i++){
            if(this.listaDeCLientes[i].id == idCliente){
                posicaoClienteNaLista = i;
                break;
            }
        }
        return posicaoClienteNaLista;
    }

    excluirClienteDaListaDeClientes(idCliente){
        this.listaDeCLientes.splice(this.buscarPosicaoDoClienteBaseadoNoId(idCliente),1);
        this.listagemView.rederizarItensDaListaDeClientes(this.listaDeCLientes);
        this.popUpView.exibirPopUpNaTela("success","Sucesso ao excluir o cliente!");
    }
}