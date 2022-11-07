"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByNameCidadeController = void 0;
const client_1 = require("../../db/client");
class GetByNameCidadeController {
    async handle(req, res) {
        var { nome } = req.params;
        const cidade = await client_1.prismaClient.cidade.findUnique({
            where: {
                nome: nome
            }
        });
        return res.json(cidade);
    }
}
exports.GetByNameCidadeController = GetByNameCidadeController;
