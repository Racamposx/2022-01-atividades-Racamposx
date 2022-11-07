"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDoacaoController = void 0;
const client_1 = require("../../db/client");
class UpdateDoacaoController {
    async handle(req, res) {
        const { id } = req.params;
        const { dataRealizada } = req.body;
        const doacao = await client_1.prismaClient.doacao.update({
            where: {
                doacaoId: Number(id)
            },
            data: {
                data: new Date(dataRealizada)
            },
        });
        return res.json(doacao);
    }
}
exports.UpdateDoacaoController = UpdateDoacaoController;
