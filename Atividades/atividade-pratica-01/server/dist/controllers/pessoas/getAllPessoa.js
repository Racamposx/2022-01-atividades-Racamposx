"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPessoaController = void 0;
const client_1 = require("../../db/client");
class GetAllPessoaController {
    async handle(req, res) {
        const pessoas = await client_1.prismaClient.pessoa.findMany({
            select: {
                idpessoa: true,
                nome: true,
                rua: true,
                numero: true,
                complemento: true,
                documento: true,
                cidadeId: true,
                tipoId: true
            }
        });
        return res.json(pessoas);
    }
}
exports.GetAllPessoaController = GetAllPessoaController;
