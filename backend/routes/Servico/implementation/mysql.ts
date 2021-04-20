import {knex} from "../../../Database/AdminDb"
import { ICreateservice } from "../Creation";
import { IService } from "../Model/IService";

export class createServiceMysql implements ICreateservice{
    async criation(service: IService): Promise<void>{
        const save = await knex.insert({txt_descricao:service.descricao, txt_nome:service.nome, prazo:service.prazo}).into('tbl_servico').then(result=>{
            console.log(result)
            return result
        }).catch(error=>{
            console.log(error)
            return error
        })
    }
}