import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllClienteController{
    async handle(req: Request, res: Response) {

        const clientes = await prismaClient.cliente.findMany({
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

        return res.json(clientes);
    }
}