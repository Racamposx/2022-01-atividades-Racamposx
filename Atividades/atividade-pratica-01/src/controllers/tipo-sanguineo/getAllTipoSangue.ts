import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllTipoSangueController {

    async handle(req: Request, res: Response) {
        const tipoSangue = await prismaClient.tipo_sanguineo.findMany({
            select: {
                tipoId: true,
                tipo: true,
                fator: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });

        return res.json(tipoSangue);
    }

}