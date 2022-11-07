"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllClienteController = void 0;
const client_1 = require("../../db/client");
class GetAllClienteController {
    async handle(req, res) {
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
exports.GetAllClienteController = GetAllClienteController;
