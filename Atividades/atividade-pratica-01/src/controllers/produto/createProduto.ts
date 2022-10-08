import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class CreateProdutoController {

    async handle(req: Request, res: Response){
        const {doacaoId, etiqueta, validade} = req.body;

        const produto = await prismaClient.produto.create({
            data: {
                doacaoId: doacaoId,
                etiqueta: etiqueta,
                validade: new Date(validade),
            }
        });

        return res.status(201).json(produto);
    }

}