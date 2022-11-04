import { Request, Response } from "express";
import { prismaClient } from "../../db/client";

export class UpdateClienteController {
    async handle(req: Request, res: Response) {
    const {
        nome,
        sobrenome,
        cpf,
        rua,
        numero,
        complemento,
        cep,
        cidade
    } = req.body;

    const id = req.params;

    try {
        const clienteFind = await prismaClient.cliente.findUnique({
            where: {
            clienteId: Number(id)
            }
        });
        console.log(clienteFind);

        if (clienteFind) {
            const endereco = await prismaClient.endereco.update({
            where: {
                enderecoId: Number(clienteFind.idEndereco)
            },
            data: {
                rua,
                numero,
                complemento,
                cep,
                cidade,
                }
            });
        }

        const cliente = await prismaClient.cliente.update({
            where: {
                clienteId: Number(id)
            },
            data: {
                nome,
                sobrenome,
                cpf,
                endereco: {
                    connect: {
                        enderecoId: Number(id)
                    }
                }
            }
        });

        return res.json(cliente);   
    }
        catch (error) {
            console.log(error);
            return res.status(400).json({message: `erro: ${error}`})
        }

    }
}