import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class UpdateLocalColetaController {

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {nome, rua, numero, complemento} = req.body;

        const localColeta = await prismaClient.local_coleta.update({
            where: {
                idlocal_coleta: Number(id)
            },
            data: {
                nome: nome,
                rua: rua,
                numero: numero,
                complemento: complemento,
            },
        });
        return res.json(localColeta);
    }
}
