import { Router, Request, Response, request } from "express";
import {Server} from 'http';

const router = Router();

router.get('/',(req:Request, res:Response)=>{
    res.send("Pula fogueira ia ia, Pula fogueira io io");
});

router.get('/',(req:Request,res:Response)=>{
    res.render('sobre');
});

router.get('/contato',(req:Request,res:Response)=>{
    res.render('contato');
});

router.get('/sobre',(req:Request,res:Response)=>{
    res.render('sobre');
});
 

export default router;