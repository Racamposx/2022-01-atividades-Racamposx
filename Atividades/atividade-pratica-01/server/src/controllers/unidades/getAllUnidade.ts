import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllUnidadeController {

    async handle(req: Request, res: Response){
        const unidade = await prismaClient.unidade.findMany({
            select: {
                unidadeId: true,
                nome: true,
                numero: true,
                complemento: true,
                cidadeId: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });

        return res.status(201).json(unidade);
    }

}