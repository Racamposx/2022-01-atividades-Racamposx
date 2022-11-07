"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCidadeController = void 0;
const client_1 = require("../../db/client");
class CreateCidadeController {
    async handle(req, res) {
        const { nome, estadoId } = req.body;
        const cidade = await client_1.prismaClient.cidade.create({
            data: {
                nome: nome,
                estadoId: Number(estadoId)
            }
        });
        return res.status(201).json(cidade);
    }
}
exports.CreateCidadeController = CreateCidadeController;
