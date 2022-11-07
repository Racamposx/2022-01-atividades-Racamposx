import { prismaClient } from "../../db/client";
import { Request, Response } from "express";


export class CreateAgendamentoController{

    async handle(req: Request, res: Response){
        const { date, idCarro, idCliente } = req.body;

        try{
            const agendamento = await prismaClient.agendamento.create({
                data: {
                    date: new Date(date),
                    carro: {
                        connect: {
                            carroId: Number(idCarro)
                        }
                    },
                    cliente: {
                        connect: {
                            clienteId: Number(idCliente)
                        }
                    }           
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
