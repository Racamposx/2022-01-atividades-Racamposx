import { Request, Response } from "express";
import { prismaClient } from "../../db/client";

export class UpdateCarroController {
    async handle(req: Request, res: Response) {
    const {
        modelo, marca, placa
    } = req.body;

    const {id} = req.params;

    try {
        const carroFind = await prismaClient.carro.findUnique({
            where: {
            carroId: Number(id)
            }
        });
        console.log(carroFind);

        if (carroFind) {
            const carro = await prismaClient.carro.update({
                where: {
                    carroId: Number(id)
                },
                data: {
                    modelo: modelo,
                    marca: marca,
                    placa: placa
                }
            });
            
            return res.json(carro);
        }
    }
        catch (error) {
            console.log(error);
            return res.status(400).json({message: `erro: ${error}`})
        }

    }
}