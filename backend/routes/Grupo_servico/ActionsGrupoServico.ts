import {acaogrupos} from "./Model/Iactions_Grupo_servico"
import { GrupoServico } from "./grupoServico";
import { IgServico } from "./Model/IGrupo_servico";


export class ActionsGrupoServico{
    constructor(private actionGrupos: acaogrupos){

    }
    async executeCreation(data: IgServico):Promise<void>{
        const novoGrupo = new GrupoServico(data);
        await this.actionGrupos.creationGrupoServico(novoGrupo)
    }
    async executeIndex():Promise<Response>{
        
        
        return this.actionGrupos.indexGrupoServico()
    }

}