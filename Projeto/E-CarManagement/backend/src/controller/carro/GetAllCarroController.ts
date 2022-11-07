import { prismaClient } from "../../db/client";
import { Request, Response } from "express";


export class GetAllCarroController{

    async handle(req: Request, res: Response){
        try{
            const carros = await prismaClient.carro.findMany({
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
            return res.status(201).json(carros);
        }        
        catch(error){
            return res.status(400).json({
                message: `Error ${error}`
            })
        }

    }
}
