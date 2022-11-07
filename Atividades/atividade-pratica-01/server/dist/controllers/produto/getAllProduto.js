"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProdutoController = void 0;
const client_1 = require("../../db/client");
class GetAllProdutoController {
    async handle(req, res) {
        const produtos = await client_1.prismaClient.produto.findMany({
            select: {
                produtoId: true,
                etiqueta: true,
                doacaoId: true,
                validade: true,
                criadoEm: true,
                atualizadoEm: true
            }
        });
        return res.json(produtos);
    }
}
exports.GetAllProdutoController = GetAllProdutoController;
