"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdTipoSangueController = void 0;
const client_1 = require("../../db/client");
class GetByIdTipoSangueController {
    async handle(req, res) {
        var { id } = req.params;
        const tipoSangue = await client_1.prismaClient.tipo_sanguineo.findUnique({
            where: {
                tipoId: Number(id)
            }
        });
        return res.json(tipoSangue);
    }
}
exports.GetByIdTipoSangueController = GetByIdTipoSangueController;
