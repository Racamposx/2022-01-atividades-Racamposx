import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class DeletePessoaController {

    async handle(req: Request, res: Response){
        const { id } = req.params;

        const pessoa = await prismaClient.pessoa.delete({
            where: {
                idpessoa: Number(id)
            }
        });
        return res.json(pessoa);
    }
}
