"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByNameLocalColetaController = void 0;
const client_1 = require("../../db/client");
class GetByNameLocalColetaController {
    async handle(req, res) {
        var { nome } = req.params;
        const localColeta = await client_1.prismaClient.local_coleta.findUnique({
            where: {
                nome: nome
            }
        });
        return res.json(localColeta);
    }
}
exports.GetByNameLocalColetaController = GetByNameLocalColetaController;
