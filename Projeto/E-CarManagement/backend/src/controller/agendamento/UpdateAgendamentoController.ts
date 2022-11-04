import { prismaClient } from "../../db/client";
import { Request, Response } from "express";


export class UpdateAgendamentoController{

    async handle(req: Request, res: Response){
        const { date } = req.body;
        const { id } = req.params;

        try{
            const agendamento = await prismaClient.agendamento.update({
                where: {
                    agendamentoId: Number(id)
                },
                data: {
                    data: date
                }   
            });
            return res.status(201).json(agendamento);
        }        
        catch(error){
            return res.status(400).json({
                message: `Error ${error}`
            })
        }

    }
}
