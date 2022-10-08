import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class CreateEstadoController {

    async handle(req: Request, res: Response){
        const {nome, sigla} = req.body;

        const estado = await prismaClient.estado.create({
            data: {
                nome,
                sigla
            }
        });

        return res.status(201).json(estado);
    }

}