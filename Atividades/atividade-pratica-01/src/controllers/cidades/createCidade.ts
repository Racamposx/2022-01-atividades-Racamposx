import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class CreateCidadeController {

    async handle(req: Request, res: Response){
        const {nome, estadoId} = req.body;

        const cidade = await prismaClient.cidade.create({
            data: {
                nome: nome,
                estadoId: Number(estadoId)
            }
        });

        return res.status(201).json(cidade);
    }

}