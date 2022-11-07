"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdUnidadeController = void 0;
const client_1 = require("../../db/client");
class GetByIdUnidadeController {
    async handle(req, res) {
        var { id } = req.params;
        const unidade = await client_1.prismaClient.unidade.findUnique({
            where: {
                unidadeId: Number(id)
            }
        });
        return res.json(unidade);
    }
}
exports.GetByIdUnidadeController = GetByIdUnidadeController;
