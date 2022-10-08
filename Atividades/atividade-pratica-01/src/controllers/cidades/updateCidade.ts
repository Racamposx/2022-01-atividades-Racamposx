import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class UpdateCidadeController {

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {nome} = req.body;

        const cidade = await prismaClient.cidade.update({
            where: {
                cidadeId: Number(id)
            },
            data: {
                nome: nome
            },
        });
        return res.json(cidade);
    }
}
