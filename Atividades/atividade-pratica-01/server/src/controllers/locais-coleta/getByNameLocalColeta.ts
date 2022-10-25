import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByNameLocalColetaController {

    async handle(req: Request, res: Response){
        var { nome } = req.params;

        const localColeta = await prismaClient.local_coleta.findUnique({
            where: {
                nome: nome
            }
        });
        return res.json(localColeta);
    }

}