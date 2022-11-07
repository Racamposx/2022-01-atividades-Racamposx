"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdPessoaController = void 0;
const client_1 = require("../../db/client");
class GetByIdPessoaController {
    async handle(req, res) {
        const { id } = req.params;
        const pessoa = await client_1.prismaClient.pessoa.findUnique({
            where: {
                idpessoa: Number(id)
            }
        });
        return res.json(pessoa);
    }
}
exports.GetByIdPessoaController = GetByIdPessoaController;
