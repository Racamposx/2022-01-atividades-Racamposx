import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdCarroController{
    async handle(req: Request, res: Response) {
        const {id} = req.params;

        const carro = await prismaClient.carro.findUnique({
            where: {
                carroId: Number(id)
            },
            select: {
                carroId: true,
                    idCliente: true,
                    modelo: true,
                    marca: true,
                    placa: true,
                cliente: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        cpf: true
                    }
                }
            }
        });

        return res.json(carro);
    }
}