import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class UpdatePessoaController {

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {nome, rua, numero, complemento, documento} = req.body;

        const pessoa = await prismaClient.pessoa.update({
            where: {
                idpessoa: Number(id)
            },
            data: {
                nome: nome,
                rua: rua,
                numero: numero,
                complemento: complemento,
                documento: documento
            },
        });
        return res.json(pessoa);
    }
}
