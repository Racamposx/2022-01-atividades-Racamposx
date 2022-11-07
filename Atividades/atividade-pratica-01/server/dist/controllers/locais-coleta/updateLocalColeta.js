"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLocalColetaController = void 0;
const client_1 = require("../../db/client");
class UpdateLocalColetaController {
    async handle(req, res) {
        const { id } = req.params;
        const { nome, rua, numero, complemento } = req.body;
        const localColeta = await client_1.prismaClient.local_coleta.update({
            where: {
                idlocal_coleta: Number(id)
            },
            data: {
                nome: nome,
                rua: rua,
                numero: numero,
                complemento: complemento,
            },
        });
        return res.json(localColeta);
    }
}
exports.UpdateLocalColetaController = UpdateLocalColetaController;
