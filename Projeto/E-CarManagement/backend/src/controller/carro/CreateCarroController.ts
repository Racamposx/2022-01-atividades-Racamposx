import { prismaClient } from "../../db/client";
import { Request, Response } from "express";


export class CreateCarroController{

    async handle(req: Request, res: Response){
        const { modelo, marca, id } = req.body;

        try{
            const carro = await prismaClient.carro.create({
                data: {
                    modelo,
                    marca,
                    cliente: {
                        connect: {
                            clienteId: Number(id)
                        }
                    }
                }
            });
            return res.status(201).json(carro);
        }        
        catch(error){
            return res.status(400).json({
                message: `Error ${error}`
            })
        }

    }
}
