import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByNameEstado{
    
    async handle(req: Request, res: Response){
        var { nome } = req.params;

        const estado = await prismaClient.estado.findUnique({
            where: {
                nome: nome
            }
        });
        return res.json(estado);
    }

}