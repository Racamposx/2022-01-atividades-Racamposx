"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdManutencaoController = void 0;
const client_1 = require("../../db/client");
class GetByIdManutencaoController {
    async handle(req, res) {
        const { id } = req.body;
        const manutencao = await client_1.prismaClient.manutencao.findUnique({
            where: {
                manutencaoId: Number(id)
            },
            select: {
                manutencaoId: true,
                dataRealizada: true,
                descricao: true,
                idCarro: true,
                idCliente: true
            }
        });
        return res.json(manutencao);
    }
}
exports.GetByIdManutencaoController = GetByIdManutencaoController;
