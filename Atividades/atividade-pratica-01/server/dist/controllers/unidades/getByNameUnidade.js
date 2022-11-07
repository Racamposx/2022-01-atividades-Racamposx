"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByNameUnidadeController = void 0;
const client_1 = require("../../db/client");
class GetByNameUnidadeController {
    async handle(req, res) {
        var { nome } = req.params;
        const unidade = await client_1.prismaClient.unidade.findUnique({
            where: {
                nome: nome
            }
        });
        return res.json(unidade);
    }
}
exports.GetByNameUnidadeController = GetByNameUnidadeController;
