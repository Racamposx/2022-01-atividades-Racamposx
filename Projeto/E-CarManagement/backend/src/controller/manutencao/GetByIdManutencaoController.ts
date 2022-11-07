import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdManutencaoController{
    async handle(req: Request, res: Response) {
        const {id} = req.params;

        const manutencao = await prismaClient.manutencao.findUnique({
            where: {
                manutencaoId: Number(id)
            },
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

        return res.json(manutencao);
    }
}