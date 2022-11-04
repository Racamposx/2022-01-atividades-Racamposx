import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdManutencaoController{
    async handle(req: Request, res: Response) {
        const {id} = req.body;

        const manutencao = await prismaClient.manutencao.findUnique({
            where: {
                manutencaoId: Number(id)
            },
            select: {
                manutencaoId: true,
                dataRealizada: true,
                descricao: true,
                idCarro: true,
                idCliente: true
            }
        });

        return res.json(manutencao);
    }
}