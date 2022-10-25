import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdUnidadeController {

    async handle(req: Request, res: Response){
        var { id } = req.params;

        const unidade = await prismaClient.unidade.findUnique({
            where: {
                unidadeId: Number(id)
            }
        });
        return res.json(unidade);
    }

}