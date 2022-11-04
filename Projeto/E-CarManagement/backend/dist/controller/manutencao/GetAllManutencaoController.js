"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllManutencaoController = void 0;
const client_1 = require("../../db/client");
class GetAllManutencaoController {
    async handle(req, res) {
        const manutencoes = await client_1.prismaClient.manutencao.findMany({
            select: {
                manutencaoId: true,
                dataRealizada: true,
                descricao: true,
                idCarro: true,
                idCliente: true
            }
        });
        return res.json(manutencoes);
    }
}
exports.GetAllManutencaoController = GetAllManutencaoController;
