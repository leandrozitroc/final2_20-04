import { ActionsGrupoServico } from "./ActionsGrupoServico";
import { mysqlCreateGrupo } from "./implementations/mysql";
import {GrupoServicoController} from './grupoServicoController'

const mysqlcreategrupocreation = new mysqlCreateGrupo()


const creategroup = new ActionsGrupoServico(
    mysqlcreategrupocreation
)

const servicogroupcontroller = new GrupoServicoController(creategroup)

export {creategroup, servicogroupcontroller}