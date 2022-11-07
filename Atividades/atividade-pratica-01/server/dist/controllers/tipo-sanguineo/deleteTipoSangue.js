"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTipoSangueController = void 0;
const client_1 = require("../../db/client");
class DeleteTipoSangueController {
    async handle(req, res) {
        const { id } = req.params;
        const tipoSangue = await client_1.prismaClient.tipo_sanguineo.delete({
            where: {
                tipoId: Number(id)
            }
        });
        return res.json(tipoSangue);
    }
}
exports.DeleteTipoSangueController = DeleteTipoSangueController;
