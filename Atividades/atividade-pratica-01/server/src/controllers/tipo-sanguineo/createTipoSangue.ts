import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class CreateTipoSangueController {

    async handle(req: Request, res: Response){
        const {tipo, fator} = req.body;

        const tipoSanguineo = await prismaClient.tipo_sanguineo.create({
            data: {
                tipo: tipo,
                fator: fator
            }
        });

        return res.status(201).json(tipoSanguineo);
    }

}