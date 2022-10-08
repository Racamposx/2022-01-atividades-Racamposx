import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class CreateLocalColetaController {

    async handle(req: Request, res: Response){
        const {nome, rua, numero, complemento, cidadeId} = req.body;

        const localColeta = await prismaClient.local_coleta.create({
            data: {
                nome: nome,
                rua: rua,
                numero: numero,
                complemento: complemento,
                cidadeId: Number(cidadeId)
            }
        });

        return res.status(201).json(localColeta);
    }

}