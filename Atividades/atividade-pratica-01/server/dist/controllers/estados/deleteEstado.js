"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEstadoController = void 0;
const client_1 = require("../../db/client");
class DeleteEstadoController {
    async handle(req, res) {
        const { id } = req.params;
        const estado = await client_1.prismaClient.estado.delete({
            where: {
                idEstado: Number(id)
            }
        });
        return res.json(estado);
    }
}
exports.DeleteEstadoController = DeleteEstadoController;
