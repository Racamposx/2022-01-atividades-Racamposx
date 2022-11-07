"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdCidadeController = void 0;
const client_1 = require("../../db/client");
class GetByIdCidadeController {
    async handle(req, res) {
        var { id } = req.params;
        const cidade = await client_1.prismaClient.cidade.findUnique({
            where: {
                cidadeId: Number(id)
            }
        });
        return res.json(cidade);
    }
}
exports.GetByIdCidadeController = GetByIdCidadeController;
