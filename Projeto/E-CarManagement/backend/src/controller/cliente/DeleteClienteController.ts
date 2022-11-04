import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeleteClienteController{
    async handle(req: Request , res: Response){
        const { id } = req.params;

        const cliente = await prismaClient.cliente.delete({
            where: {
                clienteId: Number(id)
            }
        });

        return res.json(cliente);
    }
}