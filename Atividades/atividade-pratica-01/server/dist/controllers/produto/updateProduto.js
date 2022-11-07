"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProdutoController = void 0;
const client_1 = require("../../db/client");
class UpdateProdutoController {
    async handle(req, res) {
        const { id } = req.params;
        const { etiqueta, validade } = req.body;
        const produto = await client_1.prismaClient.produto.update({
            where: {
                produtoId: Number(id)
            },
            data: {
                etiqueta: etiqueta,
                validade: new Date(validade)
            },
        });
        return res.json(produto);
    }
}
exports.UpdateProdutoController = UpdateProdutoController;
