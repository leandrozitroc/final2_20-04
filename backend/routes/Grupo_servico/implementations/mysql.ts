import { response } from 'express';
import {knex} from '../../../Database/AdminDb'
import { IgServico } from '../Model/IGrupo_servico';
import {acaogrupos} from '../Model/Iactions_Grupo_servico'

export class mysqlCreateGrupo implements acaogrupos{
    async creationGrupoServico(group: IgServico): Promise<any>{
        const query : IgServico = knex.insert({txt_nome:group.txt_nome, txt_descricao:group.txt_descricao, taxa_id_taxa:group.taxa_id_taxa}).into('tbl_grupo')
        
      return query
    }
    async indexGrupoServico() : Promise<any>{
        const queryIndex = await knex.select().from('tbl_grupo')
       
        return queryIndex
    }

}

