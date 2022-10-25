import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class UpdateUnidadeController {

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {nome, numero, complemento} = req.body;

        const unidade = await prismaClient.unidade.update({
            where: {
                unidadeId: Number(id)
            },
            data: {
                nome: nome,
                numero: numero,
                complemento: complemento,
            },
        });
        return res.json(unidade);
    }
}
