"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLocalColetaController = void 0;
const client_1 = require("../../db/client");
class CreateLocalColetaController {
    async handle(req, res) {
        const { nome, rua, numero, complemento, cidadeId } = req.body;
        const localColeta = await client_1.prismaClient.local_coleta.create({
            data: {
                nome: nome,
                rua: rua,
                numero: numero,
                complemento: complemento,
                cidadeId: Number(cidadeId)
            }
        });
        return res.status(201).json(localColeta);
    }
}
exports.CreateLocalColetaController = CreateLocalColetaController;
