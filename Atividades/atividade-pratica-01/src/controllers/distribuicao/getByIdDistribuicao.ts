import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdDistribuicaoController {

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        
        const distribuicao = await prismaClient.distribuicao.findUnique({
            where: {
                distribuicaoId: Number(id)
            }
        });

        return res.json(distribuicao);
    }

}