import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdLocalColetaController {

    async handle(req: Request, res: Response){
        var { id } = req.params;

        const localColeta = await prismaClient.local_coleta.findUnique({
            where: {
                idlocal_coleta: Number(id)
            }
        });
        return res.json(localColeta);
    }

}