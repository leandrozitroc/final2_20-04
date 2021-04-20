import { ActionsGrupoServico } from "./ActionsGrupoServico";
import {Request, response, Response} from 'express';
import { IgServico } from "./Model/IGrupo_servico";

export class GrupoServicoController{
    public data = []
    constructor(private actionsgrupos: ActionsGrupoServico ){
        this.data = this.data
    }
    async handle(req: Request, res:Response): Promise<Response>{
        const {txt_descricao, txt_nome , taxa_id_taxa} = req.body;
        try{
            await this.actionsgrupos.executeCreation({txt_descricao, txt_nome, taxa_id_taxa})
            return res.status(201).send({Message:'Done'})
        }catch(error){
            res.status(401).json({error:error})
        }
    }
   async receive(req: Request, res:Response):Promise<Response>{
       try {
           
           
           await this.actionsgrupos.executeIndex().then((result)=>{
                return res.status(200).send(result)
           }).catch((error)=>{
                console.log(error)
           })
           return res.status(200)
        }catch (error){
            res.status(401).json({error:error})
        }


    }
}