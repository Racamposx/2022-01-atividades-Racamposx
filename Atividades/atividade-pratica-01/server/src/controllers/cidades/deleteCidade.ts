import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteCidadeController {

    async handle(req: Request, res: Response){
        const { id } = req.params;

        const cidade = await prismaClient.cidade.delete({
            where: {
                cidadeId: Number(id)
            }
        });

        return res.json(cidade);
    }

}