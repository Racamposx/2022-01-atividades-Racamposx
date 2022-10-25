import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteUnidadeController {

    async handle(req: Request, res: Response){
        const { id } = req.params;

        const unidade = await prismaClient.unidade.delete({
            where: {
               unidadeId : Number(id)
            }
        });

        return res.json(unidade);
    }

}