"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDistribuicaoController = void 0;
const client_1 = require("../../db/client");
class UpdateDistribuicaoController {
    async handle(req, res) {
        const { id } = req.params;
        const { data } = req.body;
        const distribuicao = await client_1.prismaClient.distribuicao.update({
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
exports.UpdateDistribuicaoController = UpdateDistribuicaoController;
