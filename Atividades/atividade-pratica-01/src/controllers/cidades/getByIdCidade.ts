import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdCidadeController {

    async handle(req: Request, res: Response){
        var { id } = req.params;

        const cidade = await prismaClient.cidade.findUnique({
            where: {
                cidadeId: Number(id)
            }
        });
        return res.json(cidade);
    }

}