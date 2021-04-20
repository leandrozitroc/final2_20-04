import * as dotenv from 'dotenv';
dotenv.config({path: process.env.NODE_ENV === 'test' ? '.env.test': '.env'})
import * as bodyParser from "body-parser";
import * as express from "express";


import CreateAcc1 from './routes/createAcoount'
import Login from './routes/login'
import Usuario from './routes/usuario'


import AdminLogin from "./routes/Admin"
import usuario from "./routes/usuario";
import { createController } from './routes/Servico';
import { request } from 'node:http';
import { servicogroupcontroller } from './routes/Grupo_servico';
export const app = express();
app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

/*dbConfig.sync({force:false}).then(()=>{
    console.log('Everything ok')//(USADO PARA CRIAR OS DBs)
})*/

//login/account
app.post('/autenticar/novo/usuario', CreateAcc1.createacc)
app.post('/autenticar', Login.trueLogin)
app.get('/usuario/:login', Usuario.getuser)

//admins
app.post('/adminlogin', AdminLogin.adminLogin)
// servico

app.use('/servico', (req,res)=>{
    return createController.handle(req, res)
})

app.post('/grupo/servico', (req,res)=>{
    return servicogroupcontroller.handle(req,res)
})

app.get('/grupo/servico/index', (req,res)=>{
    return servicogroupcontroller.receive(req,res,)
})

app.listen(9111, ()=>{
    console.log('Connected to port 9111')
})


