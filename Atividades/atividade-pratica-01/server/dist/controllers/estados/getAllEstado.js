"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllEstadoController = void 0;
const client_1 = require("../../db/client");
class GetAllEstadoController {
    async handle(req, res) {
        const estados = await client_1.prismaClient.estado.findMany({
            select: {
                idEstado: true,
                nome: true,
                sigla: true,
                criadoEm: true,
                AtualizadoEm: true
            }
        });
        return res.json(estados);
    }
}
exports.GetAllEstadoController = GetAllEstadoController;
