import { prismaClient } from "../../db/client";
import { Request, Response } from "express";


export class GetAllAgendamentoController{

    async handle(req: Request, res: Response){
        try{
            const agendamentos = await prismaClient.agendamento.findMany({
                select: {
                    agendamentoId: true,
                    data: true,
                    idCliente: true,
                    idCarro: true
                }
            });
            return res.status(201).json(agendamentos);
        }        
        catch(error){
            return res.status(400).json({
                message: `Error ${error}`
            })
        }

    }
}
