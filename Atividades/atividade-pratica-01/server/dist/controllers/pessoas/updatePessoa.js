"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePessoaController = void 0;
const client_1 = require("../../db/client");
class UpdatePessoaController {
    async handle(req, res) {
        const { id } = req.params;
        const { nome, rua, numero, complemento, documento } = req.body;
        const pessoa = await client_1.prismaClient.pessoa.update({
            where: {
                idpessoa: Number(id)
            },
            data: {
                nome: nome,
                rua: rua,
                numero: numero,
                complemento: complemento,
                documento: documento
            },
        });
        return res.json(pessoa);
    }
}
exports.UpdatePessoaController = UpdatePessoaController;
