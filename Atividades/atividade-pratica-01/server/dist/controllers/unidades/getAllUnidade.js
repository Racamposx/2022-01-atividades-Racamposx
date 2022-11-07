"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUnidadeController = void 0;
const client_1 = require("../../db/client");
class GetAllUnidadeController {
    async handle(req, res) {
        const unidade = await client_1.prismaClient.unidade.findMany({
            select: {
                unidadeId: true,
                nome: true,
                numero: true,
                complemento: true,
                cidadeId: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });
        return res.status(201).json(unidade);
    }
}
exports.GetAllUnidadeController = GetAllUnidadeController;
