import express,{Request,Response, Router} from 'express';
import {Server} from 'http';
import mainRoutes from './routes/index';
import path from 'path';
import mustache from 'mustache-express';

//Usando express
let server = express();

//usando o mustache para puxar o html 

server.set('view engine', 'mustache');

server.set('views',(path.join(__dirname,'views')));

server.engine('mustache',mustache());
//Inserindo a rota no servidor

server.use(mainRoutes);

//criando a rota para acessar a pasta publica

server.use(express.static(path.join(__dirname,'../public')));

server.use((req:Request,res:Response)=>{
   res.status(404).send("Error [ 404 ]  - Página não encontrada ") 
});

//Escutando portas por exemplo a 3000
server.listen(3000);
