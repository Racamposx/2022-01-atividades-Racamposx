"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLocalColetaController = void 0;
const client_1 = require("../../db/client");
class DeleteLocalColetaController {
    async handle(req, res) {
        const { id } = req.params;
        const localColeta = await client_1.prismaClient.local_coleta.delete({
            where: {
                idlocal_coleta: Number(id)
            }
        });
        return res.json(localColeta);
    }
}
exports.DeleteLocalColetaController = DeleteLocalColetaController;
