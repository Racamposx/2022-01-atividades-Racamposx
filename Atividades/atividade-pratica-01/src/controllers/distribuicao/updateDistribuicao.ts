import { prismaClient } from "../../db/client";
import { Request, Response } from "express";

export class UpdateDistribuicaoController {

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const {data} = req.body;

        const distribuicao = await prismaClient.distribuicao.update({
            where: {
                distribuicaoId: Number(id)
            },
            data: {
                data: new Date(data)
            },
        });
        return res.json(distribuicao);
    }
}
