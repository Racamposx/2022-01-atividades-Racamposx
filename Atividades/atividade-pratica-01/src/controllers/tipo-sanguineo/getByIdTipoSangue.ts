import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdTipoSangueController {

    async handle(req: Request, res: Response){
        var { id } = req.params;

        const tipoSangue = await prismaClient.tipo_sanguineo.findUnique({
            where: {
                tipoId: Number(id)
            }
        });
        return res.json(tipoSangue);
    }

}