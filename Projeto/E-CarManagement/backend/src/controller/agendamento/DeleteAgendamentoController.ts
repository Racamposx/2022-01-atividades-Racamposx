import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteAgendamentoController{
    async handle(req: Request, res: Response) {
        const {id} = req.params;

    try{    
        const agendamento = await prismaClient.agendamento.delete({
            where: {
                agendamentoId: Number(id)
            },
        });

        return res.json(agendamento);
    }
    catch(error){
        return res.status(400).json(error);
    }
    }
}