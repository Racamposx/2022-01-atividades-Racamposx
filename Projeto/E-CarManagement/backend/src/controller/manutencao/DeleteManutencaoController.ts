import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteManutencaoController{
    async handle(req: Request , res: Response){
        const { id } = req.params;

        const manutencao = await prismaClient.manutencao.delete({
            where: {
                manutencaoId: Number(id)
            }
        });

        return res.json(manutencao);
    }
}