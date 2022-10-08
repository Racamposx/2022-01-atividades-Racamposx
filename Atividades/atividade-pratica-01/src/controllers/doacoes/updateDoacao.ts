import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class UpdateDoacaoController {

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {dataRealizada} = req.body;

        const doacao = await prismaClient.doacao.update({
            where: {
                doacaoId: Number(id)
            },
            data: {
                data: new Date(dataRealizada)
            },
        });
        return res.json(doacao);
    }
}
