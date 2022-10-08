import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllProdutoController {

    async handle(req: Request, res: Response) {
        const produtos = await prismaClient.produto.findMany({
            select: {
                produtoId: true,
                etiqueta: true,
                doacaoId: true,
                validade: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });

        return res.json(produtos);
    }

}