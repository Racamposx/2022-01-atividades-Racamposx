import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllEstadoController {

    async handle(req: Request, res: Response) {
        const estados = await prismaClient.estado.findMany({
            select: {
                idEstado: true,
                nome: true,
                sigla: true,
                criadoEm: true,
                AtualizadoEm: true
            }
        });

        return res.json(estados);
    }

}