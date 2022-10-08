import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByNameCidadeController {

    async handle(req: Request, res: Response){
        var { nome } = req.params;

        const cidade = await prismaClient.cidade.findUnique({
            where: {
                nome: nome
            }
        });
        return res.json(cidade);
    }

}