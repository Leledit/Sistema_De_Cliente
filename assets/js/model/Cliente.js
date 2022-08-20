export class Cliente{
   
    id;
    nome;
    cidade;
    sexo;

    constructor(nome,cidade,sexo){
        this.nome = nome;
        this.cidade = cidade;
        this.sexo = sexo;
        this.id = uuid.v4();
    }

    verificarValidacaoDosCampos(){
        if((this.nome != "")&&(this.cidade != "")){
            return true;
        }else{
            return false;
        }
    }
}