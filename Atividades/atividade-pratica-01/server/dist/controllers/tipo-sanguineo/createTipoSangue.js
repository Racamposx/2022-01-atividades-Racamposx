"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTipoSangueController = void 0;
const client_1 = require("../../db/client");
class CreateTipoSangueController {
    async handle(req, res) {
        const { tipo, fator } = req.body;
        const tipoSanguineo = await client_1.prismaClient.tipo_sanguineo.create({
            data: {
                tipo: tipo,
                fator: fator
            }
        });
        return res.status(201).json(tipoSanguineo);
    }
}
exports.CreateTipoSangueController = CreateTipoSangueController;
