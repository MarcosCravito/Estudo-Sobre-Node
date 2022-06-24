import express,{Request,Response} from 'express';
import {Server} from 'http';

//Usando express
let server = express();

//Configurar a página

server.get('/',(req:Request,res:Response)=>{

    res.send("Aaaaaaaa")
});


//Escutando portas por exemplo a 3000
server.listen(3000);