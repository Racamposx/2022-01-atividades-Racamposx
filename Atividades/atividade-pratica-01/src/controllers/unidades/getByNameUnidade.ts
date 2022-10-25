import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByNameUnidadeController {

    async handle(req: Request, res: Response){
        var { nome } = req.params;

        const unidade = await prismaClient.unidade.findUnique({
            where: {
                nome: nome
            }
        });
        return res.json(unidade);
    }

}