import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByIdClienteController{
    async handle(req: Request, res: Response) {
        const {id} = req.body;

        const cliente = await prismaClient.cliente.findUnique({
            where: {
                clienteId: Number(id)
            },
            select: {
                clienteId: true,
                nome: true,
                sobrenome: true,
                cpf: true,
                endereco: {
                    select:{    
                        enderecoId: true,
                        rua: true,
                        numero: true,
                        complemento: true,
                        cep: true,
                        cidade: true
                    }
                }
            }
        });

        return res.json(cliente);
    }
}