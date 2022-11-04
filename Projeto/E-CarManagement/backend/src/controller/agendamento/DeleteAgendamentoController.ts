import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteAgendamentoController{
    async handle(req: Request, res: Response) {
        const {id} = req.body;

        const agendamento = await prismaClient.agendamento.delete({
            where: {
                agendamentoId: Number(id)
            },
        });

        return res.json(agendamento);
    }
}