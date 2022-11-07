"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllDistribuicaoController = void 0;
const client_1 = require("../../db/client");
class GetAllDistribuicaoController {
    async handle(req, res) {
        const distribuicoes = await client_1.prismaClient.distribuicao.findMany({
            select: {
                distribuicaoId: true,
                produtoId: true,
                unidadeId: true,
                data: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });
        return res.json(distribuicoes);
    }
}
exports.GetAllDistribuicaoController = GetAllDistribuicaoController;
