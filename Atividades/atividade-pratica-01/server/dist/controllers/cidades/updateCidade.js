"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCidadeController = void 0;
const client_1 = require("../../db/client");
class UpdateCidadeController {
    async handle(req, res) {
        const { id } = req.params;
        const { nome } = req.body;
        const cidade = await client_1.prismaClient.cidade.update({
            where: {
                cidadeId: Number(id)
            },
            data: {
                nome: nome
            },
        });
        return res.json(cidade);
    }
}
exports.UpdateCidadeController = UpdateCidadeController;
