"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdProdutoController = void 0;
const client_1 = require("../../db/client");
class GetByIdProdutoController {
    async handle(req, res) {
        const { id } = req.params;
        const produto = await client_1.prismaClient.produto.findUnique({
            where: {
                produtoId: Number(id)
            }
        });
        return res.json(produto);
    }
}
exports.GetByIdProdutoController = GetByIdProdutoController;
