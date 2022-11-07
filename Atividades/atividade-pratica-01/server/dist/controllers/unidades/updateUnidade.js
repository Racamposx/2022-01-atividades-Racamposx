"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUnidadeController = void 0;
const client_1 = require("../../db/client");
class UpdateUnidadeController {
    async handle(req, res) {
        const { id } = req.params;
        const { nome, numero, complemento } = req.body;
        const unidade = await client_1.prismaClient.unidade.update({
            where: {
                unidadeId: Number(id)
            },
            data: {
                nome: nome,
                numero: numero,
                complemento: complemento,
            },
        });
        return res.json(unidade);
    }
}
exports.UpdateUnidadeController = UpdateUnidadeController;
