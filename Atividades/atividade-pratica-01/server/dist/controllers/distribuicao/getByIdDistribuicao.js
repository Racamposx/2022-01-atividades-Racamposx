"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdDistribuicaoController = void 0;
const client_1 = require("../../db/client");
class GetByIdDistribuicaoController {
    async handle(req, res) {
        const { id } = req.params;
        const distribuicao = await client_1.prismaClient.distribuicao.findUnique({
            where: {
                distribuicaoId: Number(id)
            }
        });
        return res.json(distribuicao);
    }
}
exports.GetByIdDistribuicaoController = GetByIdDistribuicaoController;
