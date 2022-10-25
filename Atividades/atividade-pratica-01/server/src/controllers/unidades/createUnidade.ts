import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class CreateUnidadeController {

    async handle(req: Request, res: Response){
        const {nome, numero, complemento, cidadeId} = req.body;

        const unidade = await prismaClient.unidade.create({
            data: {
                nome: nome,
                numero: numero,
                complemento: complemento,
                cidadeId: Number(cidadeId)
            }
        });

        return res.status(201).json(unidade);
    }

}