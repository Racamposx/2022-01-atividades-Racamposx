"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProdutoController = void 0;
const client_1 = require("../../db/client");
class DeleteProdutoController {
    async handle(req, res) {
        const { id } = req.params;
        const produto = await client_1.prismaClient.produto.delete({
            where: {
                produtoId: Number(id)
            }
        });
        return res.json(produto);
    }
}
exports.DeleteProdutoController = DeleteProdutoController;
