import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetByNamePessoaController {

    async handle(req: Request, res: Response) {
        const { nome } = req.params;
        
        const pessoa = await prismaClient.pessoa.findUnique({
            where: {
                nome: nome
            }
        });

        return res.json(pessoa);
    }

}