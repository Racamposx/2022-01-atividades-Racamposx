"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDoacaoController = void 0;
const client_1 = require("../../db/client");
class DeleteDoacaoController {
    async handle(req, res) {
        const { id } = req.params;
        const doacao = await client_1.prismaClient.doacao.delete({
            where: {
                doacaoId: Number(id)
            }
        });
        return res.json(doacao);
    }
}
exports.DeleteDoacaoController = DeleteDoacaoController;
