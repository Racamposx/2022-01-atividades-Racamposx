import { prismaClient } from "../../db/client";
import { Request, Response } from "express";


export class CreateClienteController{

    async handle(req: Request, res: Response){
        const {
            rua,
            numero,
            complemento,
            cep,
            cidade,
            nome,
            sobrenome,
            cpf
        } = req.body;

        try{
            const endereco = await prismaClient.endereco.create({
                data: {
                    rua,
                    numero,
                    complemento,
                    cep,
                    cidade
                }
            });

            const cliente = await prismaClient.cliente.create({
                data: {
                    nome,
                    sobrenome,
                    cpf,
                    endereco: {
                        connect: {
                            enderecoId: endereco.enderecoId
                        }
                    }
                }
            })

            return res.status(201).json(cliente);
        }        
        catch(error){
            return res.status(400).json({
                message: 'unexpected error =('
            })
        }

    }
}
