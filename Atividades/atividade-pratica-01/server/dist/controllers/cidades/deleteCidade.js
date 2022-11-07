"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCidadeController = void 0;
const client_1 = require("../../db/client");
class DeleteCidadeController {
    async handle(req, res) {
        const { id } = req.params;
        const cidade = await client_1.prismaClient.cidade.delete({
            where: {
                cidadeId: Number(id)
            }
        });
        return res.json(cidade);
    }
}
exports.DeleteCidadeController = DeleteCidadeController;
