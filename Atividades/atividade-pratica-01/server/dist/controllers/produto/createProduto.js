"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProdutoController = void 0;
const client_1 = require("../../db/client");
class CreateProdutoController {
    async handle(req, res) {
        const { doacaoId, etiqueta, validade } = req.body;
        const produto = await client_1.prismaClient.produto.create({
            data: {
                doacaoId: doacaoId,
                etiqueta: etiqueta,
                validade: new Date(validade),
            }
        });
        return res.status(201).json(produto);
    }
}
exports.CreateProdutoController = CreateProdutoController;
