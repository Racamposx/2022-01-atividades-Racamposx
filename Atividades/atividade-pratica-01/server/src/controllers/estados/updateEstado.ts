import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class UpdateEstadoController {

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {nome, sigla} = req.body;

        const estado = await prismaClient.estado.update({
            where: {
                idEstado: Number(id)
            },
            data: {
                nome: nome,
                sigla: sigla
            },
        });
        return res.json(estado);
    }

}