"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCidadeController = void 0;
const client_1 = require("../../db/client");
class GetAllCidadeController {
    async handle(req, res) {
        const estados = await client_1.prismaClient.cidade.findMany({
            select: {
                cidadeId: true,
                nome: true,
                estadoId: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });
        return res.json(estados);
    }
}
exports.GetAllCidadeController = GetAllCidadeController;
