"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManutencaoController = void 0;
const client_1 = require("../../db/client");
class UpdateManutencaoController {
    async handle(req, res) {
        const { descricao, dataRealizada, idCarro, idCliente } = req.body;
        const id = req.params;
        try {
            const manutencaoFind = await client_1.prismaClient.manutencao.findUnique({
                where: {
                    manutencaoId: Number(id)
                }
            });
            if (manutencaoFind) {
                const manutencao = await client_1.prismaClient.manutencao.update({
                    where: {
                        manutencaoId: Number(id)
                    },
                    data: {
                        descricao: descricao,
                        dataRealizada: dataRealizada,
                        idCarro: idCarro,
                        idCliente: idCliente
                    }
                });
                return res.json(manutencao);
            }
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ message: `erro: ${error}` });
        }
    }
}
exports.UpdateManutencaoController = UpdateManutencaoController;
