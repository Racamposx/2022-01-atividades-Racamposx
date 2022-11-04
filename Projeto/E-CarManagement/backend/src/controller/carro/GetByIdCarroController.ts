import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdCarroController{
    async handle(req: Request, res: Response) {
        const {id} = req.body;

        const carro = await prismaClient.carro.findUnique({
            where: {
                carroId: Number(id)
            },
            select: {
                carroId: true,
                    idCliente: true,
                    modelo: true,
                    marca: true
            }
        });

        return res.json(carro);
    }
}