import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdProdutoController {

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        
        const produto = await prismaClient.produto.findUnique({
            where: {
                produtoId: Number(id)
            }
        });

        return res.json(produto);
    }

}