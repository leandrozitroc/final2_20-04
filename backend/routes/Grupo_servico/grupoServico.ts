
export class GrupoServico{
    id_grupo?: number;
    txt_descricao: string;
    txt_nome: string;
    txt_id_taxa?:number;

    constructor(props){
        Object.assign(this,props)
    }
}