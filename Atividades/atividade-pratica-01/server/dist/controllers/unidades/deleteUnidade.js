"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUnidadeController = void 0;
const client_1 = require("../../db/client");
class DeleteUnidadeController {
    async handle(req, res) {
        const { id } = req.params;
        const unidade = await client_1.prismaClient.unidade.delete({
            where: {
                unidadeId: Number(id)
            }
        });
        return res.json(unidade);
    }
}
exports.DeleteUnidadeController = DeleteUnidadeController;
