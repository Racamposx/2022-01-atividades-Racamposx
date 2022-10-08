import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdEstado{
    
    async handle(req: Request, res: Response){
        var { id } = req.params;

        const estado = await prismaClient.estado.findUnique({
            where: {
                idEstado: Number(id)
            }
        });
        return res.json(estado);
    }

}