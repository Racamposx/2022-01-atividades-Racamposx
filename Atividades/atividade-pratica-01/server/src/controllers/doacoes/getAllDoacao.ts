import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class GetAllDoacaoController {

    async handle(req: Request, res: Response) {
        const doacao = await prismaClient.doacao.findMany({
            select: {
                doacaoId: true,
                pessoaId: true,
                localId: true,
                data: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });

        return res.json(doacao);
    }

}