"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManutencaoController = void 0;
const client_1 = require("../../db/client");
class CreateManutencaoController {
    async handle(req, res) {
        const { descricao, dataRealizada, idCarro, idCliente } = req.body;
        try {
            const manutencao = await client_1.prismaClient.manutencao.create({
                data: {
                    descricao,
                    dataRealizada,
                    idCarro,
                    idCliente
                }
            });
            return res.status(201).json(manutencao);
        }
        catch (error) {
            return res.status(400).json({
                message: 'unexpected error =('
            });
        }
    }
}
exports.CreateManutencaoController = CreateManutencaoController;
