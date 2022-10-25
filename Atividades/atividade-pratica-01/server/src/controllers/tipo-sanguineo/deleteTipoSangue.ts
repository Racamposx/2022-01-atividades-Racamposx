import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteTipoSangueController {

    async handle(req: Request, res: Response){
        const { id } = req.params;

        const tipoSangue = await prismaClient.tipo_sanguineo.delete({
            where: {
                tipoId: Number(id)
            }
        });

        return res.json(tipoSangue);
    }

}