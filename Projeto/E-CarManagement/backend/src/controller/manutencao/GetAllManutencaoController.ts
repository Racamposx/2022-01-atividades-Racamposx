import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllManutencaoController{
    async handle(req: Request, res: Response) {
        
        const manutencoes = await prismaClient.manutencao.findMany({
            select: {
                manutencaoId: true,
                dataRealizada: true,
                descricao: true,
                idCarro: true,
                idCliente: true
            }
        });

        return res.json(manutencoes);
    }
}