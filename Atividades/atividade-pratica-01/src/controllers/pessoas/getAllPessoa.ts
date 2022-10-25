import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllPessoaController {

    async handle(req: Request, res: Response) {
        const pessoas = await prismaClient.pessoa.findMany({
            select: {
                idpessoa: true,
                nome: true,
                rua: true,
                numero: true,
                complemento: true,
                documento: true,
                cidadeId: true,
                tipoId: true
            }
        });

        return res.json(pessoas);
    }

}