import { Request, Response } from "express";
import { prismaClient } from "../../db/client";

export class UpdateManutencaoController {
    async handle(req: Request, res: Response) {
    const {
        descricao,
        dataRealizada,
        idCarro,
        idCliente
    } = req.body;

    const {id} = req.params;

    try {
        const manutencaoFind = await prismaClient.manutencao.findUnique({
            where: {
                manutencaoId: Number(id)
            }
        });

        if(manutencaoFind){
            const manutencao = await prismaClient.manutencao.update({
                where: {
                    manutencaoId: Number(id)
                },
                data: {
                    descricao: descricao,
                    dataRealizada: new Date(dataRealizada)
                }
            });
        
            return res.json(manutencao);   
            }
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({message: `erro: ${error}`})
        }

    }
}