import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdAgendamentoController{
    async handle(req: Request, res: Response) {
        const {id} = req.body;

        const agendamento = await prismaClient.agendamento.findUnique({
            where: {
                agendamentoId: Number(id)
            },
            select: {
                agendamentoId: true,
                data: true,
                idCliente: true,
                idCarro: true
            }
        });

        return res.json(agendamento);
    }
}