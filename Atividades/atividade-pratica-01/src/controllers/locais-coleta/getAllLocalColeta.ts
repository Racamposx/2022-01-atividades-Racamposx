import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllLocalColetaController {

    async handle(req: Request, res: Response) {
        const localColeta = await prismaClient.local_coleta.findMany({
            select: {
                idlocal_coleta: true,
                nome: true,
                rua: true,
                numero: true,
                complemento: true,
                cidadeId: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });

        return res.json(localColeta);
    }

}