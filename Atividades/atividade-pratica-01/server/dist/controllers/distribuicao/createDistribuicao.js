"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDistribuicaoController = void 0;
const client_1 = require("../../db/client");
class CreateDistribuicaoController {
    async handle(req, res) {
        const { produtoId, unidadeId, data } = req.body;
        const distribuicao = await client_1.prismaClient.distribuicao.create({
            data: {
                produtoId: produtoId,
                unidadeId: unidadeId,
                data: new Date(data)
            }
        });
        return res.status(201).json(distribuicao);
    }
}
exports.CreateDistribuicaoController = CreateDistribuicaoController;
