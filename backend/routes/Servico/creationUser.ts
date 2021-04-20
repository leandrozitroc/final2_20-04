import { ICreateservice } from "./Creation";
import { IService } from "./Model/IService";
import { Servico } from "./servico";

export class CreateService{
    constructor(private createservice: ICreateservice){

    }
    async execute(data: IService){
        const novoServico = new Servico(data)

        await this.createservice.criation(novoServico)
    }
}