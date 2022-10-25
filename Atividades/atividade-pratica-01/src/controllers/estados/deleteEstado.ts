import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteEstadoController {

    async handle(req: Request, res: Response){
        const { id } = req.params;

        const estado = await prismaClient.estado.delete({
            where: {
                idEstado: Number(id)
            }
        });

        return res.json(estado);
    }

}