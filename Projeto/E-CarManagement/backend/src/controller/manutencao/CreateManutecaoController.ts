import { prismaClient } from "../../db/client";
import { Request, Response } from "express";


export class CreateManutencaoController{

    async handle(req: Request, res: Response){
        const {
            descricao,
            dataRealizada,
            idCarro,
            idCliente
        } = req.body;

        try{
            const manutencao = await prismaClient.manutencao.create({
                data: {
                    descricao,
                    dataRealizada,
                    idCarro,
                    idCliente
                }
            });

            return res.status(201).json(manutencao);
        }        
        catch(error){
            return res.status(400).json({
                message: 'unexpected error =('
            })
        }

    }
}
