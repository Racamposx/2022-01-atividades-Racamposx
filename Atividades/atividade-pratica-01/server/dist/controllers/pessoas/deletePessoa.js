"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePessoaController = void 0;
const client_1 = require("../../db/client");
class DeletePessoaController {
    async handle(req, res) {
        const { id } = req.params;
        const pessoa = await client_1.prismaClient.pessoa.delete({
            where: {
                idpessoa: Number(id)
            }
        });
        return res.json(pessoa);
    }
}
exports.DeletePessoaController = DeletePessoaController;
