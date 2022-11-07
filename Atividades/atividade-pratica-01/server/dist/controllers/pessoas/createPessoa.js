"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePessoaController = void 0;
const client_1 = require("../../db/client");
class CreatePessoaController {
    async handle(req, res) {
        const { cidadeId, tipoId, nome, rua, numero, complemento, documento, } = req.body;
        const pessoa = await client_1.prismaClient.pessoa.create({
            data: {
                cidadeId: cidadeId,
                tipoId: tipoId,
                nome: nome,
                rua: rua,
                numero: numero,
                complemento: complemento,
                documento: documento
            }
        });
        return res.status(201).json(pessoa);
    }
}
exports.CreatePessoaController = CreatePessoaController;
