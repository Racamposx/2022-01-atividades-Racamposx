"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdLocalColetaController = void 0;
const client_1 = require("../../db/client");
class GetByIdLocalColetaController {
    async handle(req, res) {
        var { id } = req.params;
        const localColeta = await client_1.prismaClient.local_coleta.findUnique({
            where: {
                idlocal_coleta: Number(id)
            }
        });
        return res.json(localColeta);
    }
}
exports.GetByIdLocalColetaController = GetByIdLocalColetaController;
