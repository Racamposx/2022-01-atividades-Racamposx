import { prismaClient } from "../../db/client";
import { Request, Response } from "express";


export class GetAllAgendamentoController{

    async handle(req: Request, res: Response){
        try{
            const agendamentos = await prismaClient.agendamento.findMany({
                select: {
                    agendamentoId: true,
                    date: true,
                    carro: {
                        select: {
                            modelo: true,
                            marca: true
                        },
                    },
                    cliente: {
                        select: {
                            nome: true,
                            sobrenome: true,
                            cpf: true
                        },
                    },
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
