import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdAgendamentoController{
    async handle(req: Request, res: Response) {
        const {id} = req.params;

        const agendamento = await prismaClient.agendamento.findUnique({
            where: {
                agendamentoId: Number(id)
            },
            select: {
                agendamentoId: true,
                date: true,
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

        return res.json(agendamento);
    }
}