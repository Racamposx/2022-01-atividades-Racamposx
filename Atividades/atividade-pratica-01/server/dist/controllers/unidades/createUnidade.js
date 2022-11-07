"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUnidadeController = void 0;
const client_1 = require("../../db/client");
class CreateUnidadeController {
    async handle(req, res) {
        const { nome, numero, complemento, cidadeId } = req.body;
        const unidade = await client_1.prismaClient.unidade.create({
            data: {
                nome: nome,
                numero: numero,
                complemento: complemento,
                cidadeId: Number(cidadeId)
            }
        });
        return res.status(201).json(unidade);
    }
}
exports.CreateUnidadeController = CreateUnidadeController;
