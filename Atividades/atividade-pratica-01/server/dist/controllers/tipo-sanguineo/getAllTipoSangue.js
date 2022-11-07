"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTipoSangueController = void 0;
const client_1 = require("../../db/client");
class GetAllTipoSangueController {
    async handle(req, res) {
        const tipoSangue = await client_1.prismaClient.tipo_sanguineo.findMany({
            select: {
                tipoId: true,
                tipo: true,
                fator: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });
        return res.json(tipoSangue);
    }
}
exports.GetAllTipoSangueController = GetAllTipoSangueController;
