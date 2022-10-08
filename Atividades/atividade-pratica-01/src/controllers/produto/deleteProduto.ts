import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteProdutoController {

    async handle(req: Request, res: Response){
        const { id } = req.params;

        const produto = await prismaClient.produto.delete({
            where: {
                produtoId: Number(id)
            }
        });
        return res.json(produto);
    }
}
