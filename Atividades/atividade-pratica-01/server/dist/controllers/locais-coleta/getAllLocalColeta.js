"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllLocalColetaController = void 0;
const client_1 = require("../../db/client");
class GetAllLocalColetaController {
    async handle(req, res) {
        const localColeta = await client_1.prismaClient.local_coleta.findMany({
            select: {
                idlocal_coleta: true,
                nome: true,
                rua: true,
                numero: true,
                complemento: true,
                cidadeId: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });
        return res.json(localColeta);
    }
}
exports.GetAllLocalColetaController = GetAllLocalColetaController;
