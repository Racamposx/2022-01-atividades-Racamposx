import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdDoacaoController {

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        
        const doacao = await prismaClient.doacao.findUnique({
            where: {
                doacaoId: Number(id)
            }
        });

        return res.json(doacao);
    }

}