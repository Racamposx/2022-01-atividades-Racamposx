import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class UpdateTipoSangueController {

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {tipo, fator} = req.body;

        const tipoSangue = await prismaClient.tipo_sanguineo.update({
            where: {
                tipoId: Number(id)
            },
            data: {
                tipo: tipo,
                fator: fator
            },
        });
        return res.json(tipoSangue);
    }
}
