import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class UpdateProdutoController {

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {etiqueta, validade} = req.body;

        const produto = await prismaClient.produto.update({
            where: {
                produtoId: Number(id)
            },
            data: {
                etiqueta: etiqueta,
                validade: new Date(validade)
            },
        });
        return res.json(produto);
    }
}
