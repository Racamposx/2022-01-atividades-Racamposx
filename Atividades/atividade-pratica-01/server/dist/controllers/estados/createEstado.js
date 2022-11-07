"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEstadoController = void 0;
const client_1 = require("../../db/client");
class CreateEstadoController {
    async handle(req, res) {
        const { nome, sigla } = req.body;
        const estado = await client_1.prismaClient.estado.create({
            data: {
                nome,
                sigla
            }
        });
        return res.status(201).json(estado);
    }
}
exports.CreateEstadoController = CreateEstadoController;
