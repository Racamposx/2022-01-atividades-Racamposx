"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByNamePessoaController = void 0;
const client_1 = require("../../db/client");
class GetByNamePessoaController {
    async handle(req, res) {
        const { nome } = req.params;
        const pessoa = await client_1.prismaClient.pessoa.findUnique({
            where: {
                nome: nome
            }
        });
        return res.json(pessoa);
    }
}
exports.GetByNamePessoaController = GetByNamePessoaController;
