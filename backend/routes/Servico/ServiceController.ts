import {Request, Response} from 'express';
import {CreateService} from "./creationUser"

export class CreateServiceController{
    constructor(private createService: CreateService){
        
    }

    async handle(req: Request, res: Response): Promise<Response>{
        const { nome, descricao, prazo} = req.body

        try{
            await this.createService.execute({
                nome,
                descricao,
                prazo
            })
            return res.status(201).send()
        } catch( error){
            return res.status(400).json({error: error})
        } 

    }

}

