import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class CreateDoacaoController {

    async handle(req: Request, res: Response){
        const {pessoaId, localId, dataRealizada} = req.body;

        const doacao = await prismaClient.doacao.create({
            data: {
                localId: localId,
                pessoaId: pessoaId,
                data: new Date(dataRealizada)
            }
        });

        return res.status(201).json(doacao);
    }

}