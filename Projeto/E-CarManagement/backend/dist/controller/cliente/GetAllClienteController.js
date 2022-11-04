"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCLienteController = void 0;
const client_1 = require("../../db/client");
class GetAllCLienteController {
    async handle(req, res) {
        const { id } = req.body;
        const clientes = await client_1.prismaClient.cliente.findMany({
            select: {
                clienteId: true,
                nome: true,
                sobrenome: true,
                cpf: true,
                endereco: {
                    select: {
                        enderecoId: true,
                        rua: true,
                        numero: true,
                        complemento: true,
                        cep: true,
                        cidade: true
                    }
                }
            }
        });
        return res.json(clientes);
    }
}
exports.GetAllCLienteController = GetAllCLienteController;
