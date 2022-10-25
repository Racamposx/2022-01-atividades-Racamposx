import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllCidadeController {

    async handle(req: Request, res: Response) {
        const estados = await prismaClient.cidade.findMany({
            select: {
                cidadeId: true,
                nome: true,
                estadoId: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });

        return res.json(estados);
    }

}