"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstadoController = void 0;
const client_1 = require("../../db/client");
class UpdateEstadoController {
    async handle(req, res) {
        const { id } = req.params;
        const { nome, sigla } = req.body;
        const estado = await client_1.prismaClient.estado.update({
            where: {
                idEstado: Number(id)
            },
            data: {
                nome: nome,
                sigla: sigla
            },
        });
        return res.json(estado);
    }
}
exports.UpdateEstadoController = UpdateEstadoController;
