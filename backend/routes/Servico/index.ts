import { CreateService } from "./creationUser";
import { createServiceMysql } from "./implementation/mysql";
import { CreateServiceController } from "./ServiceController";



const mysqlimplement = new createServiceMysql();

const createservice = new CreateService (
    mysqlimplement
)

const createController = new CreateServiceController(createservice)

export { createservice, createController}