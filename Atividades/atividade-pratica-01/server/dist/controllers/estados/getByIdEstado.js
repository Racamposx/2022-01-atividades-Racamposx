"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdEstado = void 0;
const client_1 = require("../../db/client");
class GetByIdEstado {
    async handle(req, res) {
        var { id } = req.params;
        const estado = await client_1.prismaClient.estado.findUnique({
            where: {
                idEstado: Number(id)
            }
        });
        return res.json(estado);
    }
}
exports.GetByIdEstado = GetByIdEstado;
