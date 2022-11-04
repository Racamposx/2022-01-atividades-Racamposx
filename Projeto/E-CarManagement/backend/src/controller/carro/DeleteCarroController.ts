import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteCarroController{
    async handle(req: Request, res: Response) {
        const {id} = req.body;

        const carro = await prismaClient.carro.delete({
            where: {
                carroId: Number(id)
            },
        });

        return res.json(carro);
    }
}