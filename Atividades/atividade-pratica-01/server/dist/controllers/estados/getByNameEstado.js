"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByNameEstado = void 0;
const client_1 = require("../../db/client");
class GetByNameEstado {
    async handle(req, res) {
        var { nome } = req.params;
        const estado = await client_1.prismaClient.estado.findUnique({
            where: {
                nome: nome
            }
        });
        return res.json(estado);
    }
}
exports.GetByNameEstado = GetByNameEstado;
