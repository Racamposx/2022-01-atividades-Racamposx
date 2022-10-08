import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class CreatePessoaController {

    async handle(req: Request, res: Response){
        const {cidadeId, tipoId, nome, rua, numero, complemento, documento,} = req.body;

        const pessoa = await prismaClient.pessoa.create({
            data: {
                cidadeId: cidadeId,
                tipoId: tipoId,
                nome: nome,
                rua: rua,
                numero: numero,
                complemento: complemento,
                documento: documento              
            }
        });

        return res.status(201).json(pessoa);
    }

}