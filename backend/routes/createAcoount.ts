import {knex} from "../Database/AdminDb"
import * as express from 'express'
import * as bcrypt from 'bcryptjs'


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 


 class CreateAcc1{
  
    salt = 10
    
   async createacc (req: any,res: any) {
       const dados = await req.body
        const data = formatDate(dados.dtNascimento)
        
       if(knex.select()
       .table('tbl_usuario')
       .where({email: dados.txt_email})){
           await knex.insert({txt_email:dados.txt_email,txt_nome:dados.txt_nome, txt_telefone:dados.txt_telefone, txt_cpf:dados.txt_cpf, txt_endereco:dados.txt_endereco,
            dt_nascimento:dados.txt_dtNascimento, txt_senha: bcrypt.hashSync(dados.txt_senha)}).into('tbl_usuario')
            
           .then(data=>{
                
                knex
                .insert({permissao_id:dados.id_permissao}).into('tbl_usuario_permissao').then(data=>{
                    res.status(200)
                    res.json({message:'Conta Criada com Sucesso', })  
                    console.log(data)
                
                    
                
                    
                
                    
                }).catch(error=>{
                    console.log(error)
                    res.status(403)
                    res.json({error:error})
                })
               

           }).catch(error=>{
               console.log(error)
               res.status(403)
               res.json({error:error})
           

           })
       
           if (dados.tipoAcesso == 2){
            knex.insert({txt_email:dados.txt_email, txt_endereco:dados.txt_endereco, txt_nome:dados.txt_nome, txt_telefone:dados.txt_telefone}).into('tbl_profissional')
            .then(data=>{
                res.status(200)
                res.json({message:'Conta Criada com Sucesso', })  
                console.log(data)
                
            }).catch(error=>{
                console.log(error)
                res.json({error: error})
            })
        
            }    
       }     
           
   }
}



export default new CreateAcc1()