import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteLocalColetaController {

    async handle(req: Request, res: Response){
        const { id } = req.params;

        const localColeta = await prismaClient.local_coleta.delete({
            where: {
                idlocal_coleta: Number(id)
            }
        });

        return res.json(localColeta);
    }

}