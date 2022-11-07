"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDistribuicaoController = void 0;
const client_1 = require("../../db/client");
class DeleteDistribuicaoController {
    async handle(req, res) {
        const { id } = req.params;
        const distribuicao = await client_1.prismaClient.distribuicao.delete({
            where: {
                distribuicaoId: Number(id)
            }
        });
        return res.json(distribuicao);
    }
}
exports.DeleteDistribuicaoController = DeleteDistribuicaoController;
