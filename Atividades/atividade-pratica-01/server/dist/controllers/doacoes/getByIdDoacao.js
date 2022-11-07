"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdDoacaoController = void 0;
const client_1 = require("../../db/client");
class GetByIdDoacaoController {
    async handle(req, res) {
        const { id } = req.params;
        const doacao = await client_1.prismaClient.doacao.findUnique({
            where: {
                doacaoId: Number(id)
            }
        });
        return res.json(doacao);
    }
}
exports.GetByIdDoacaoController = GetByIdDoacaoController;
