import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllDistribuicaoController {

    async handle(req: Request, res: Response) {
        const distribuicoes = await prismaClient.distribuicao.findMany({
            select: {
                distribuicaoId: true,
                produtoId: true,
                unidadeId: true,
                data: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });

        return res.json(distribuicoes);
    }

}