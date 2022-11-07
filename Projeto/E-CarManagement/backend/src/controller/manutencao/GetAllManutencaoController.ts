import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllManutencaoController{
    async handle(req: Request, res: Response) {
        
        const manutencoes = await prismaClient.manutencao.findMany({
            select: {
                manutencaoId: true,
                dataRealizada: true,
                descricao: true,
                carro: {
                    select: {
                        modelo: true,
                        marca: true
                    }
                },
                cliente: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        cpf: true
                    }
                }
            }
        });

        return res.json(manutencoes);
    }
}