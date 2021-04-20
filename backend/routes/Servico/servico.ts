export class Servico{
    public nome: string
    public descricao : string
    public prazo: string

    constructor(props){
        Object.assign(this,props)
    }
}