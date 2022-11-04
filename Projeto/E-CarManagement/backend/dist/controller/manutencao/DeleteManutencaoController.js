"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManutencaoController = void 0;
const client_1 = require("../../db/client");
class DeleteManutencaoController {
    async handle(req, res) {
        const { id } = req.params;
        const manutencao = await client_1.prismaClient.manutencao.delete({
            where: {
                manutencaoId: Number(id)
            }
        });
        return res.json(manutencao);
    }
}
exports.DeleteManutencaoController = DeleteManutencaoController;
