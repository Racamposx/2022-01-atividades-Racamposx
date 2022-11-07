"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTipoSangueController = void 0;
const client_1 = require("../../db/client");
class UpdateTipoSangueController {
    async handle(req, res) {
        const { id } = req.params;
        const { tipo, fator } = req.body;
        const tipoSangue = await client_1.prismaClient.tipo_sanguineo.update({
            where: {
                tipoId: Number(id)
            },
            data: {
                tipo: tipo,
                fator: fator
            },
        });
        return res.json(tipoSangue);
    }
}
exports.UpdateTipoSangueController = UpdateTipoSangueController;
