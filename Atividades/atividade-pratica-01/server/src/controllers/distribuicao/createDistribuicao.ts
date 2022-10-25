import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class CreateDistribuicaoController {

    async handle(req: Request, res: Response){
        const {produtoId, unidadeId, data} = req.body;

        const distribuicao = await prismaClient.distribuicao.create({
            data: {
                produtoId: produtoId,
                unidadeId: unidadeId,
                data: new Date(data)
            }
        });

        return res.status(201).json(distribuicao);
    }

}