"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllDoacaoController = void 0;
const client_1 = require("../../db/client");
class GetAllDoacaoController {
    async handle(req, res) {
        const doacao = await client_1.prismaClient.doacao.findMany({
            select: {
                doacaoId: true,
                pessoaId: true,
                localId: true,
                data: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });
        return res.json(doacao);
    }
}
exports.GetAllDoacaoController = GetAllDoacaoController;
