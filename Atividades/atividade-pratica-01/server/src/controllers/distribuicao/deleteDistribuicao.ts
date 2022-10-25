import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteDistribuicaoController {

    async handle(req: Request, res: Response){
        const { id } = req.params;

        const distribuicao = await prismaClient.distribuicao.delete({
            where: {
                distribuicaoId: Number(id)
            }
        });
        return res.json(distribuicao);
    }
}
