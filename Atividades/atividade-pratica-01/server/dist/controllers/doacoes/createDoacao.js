"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDoacaoController = void 0;
const client_1 = require("../../db/client");
class CreateDoacaoController {
    async handle(req, res) {
        const { pessoaId, localId, dataRealizada } = req.body;
        const doacao = await client_1.prismaClient.doacao.create({
            data: {
                localId: localId,
                pessoaId: pessoaId,
                data: new Date(dataRealizada)
            }
        });
        return res.status(201).json(doacao);
    }
}
exports.CreateDoacaoController = CreateDoacaoController;
