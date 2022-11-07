"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdClienteController = void 0;
const client_1 = require("../../db/client");
class GetByIdClienteController {
    async handle(req, res) {
        const { id } = req.params;
        const cliente = await client_1.prismaClient.cliente.findUnique({
            where: {
                clienteId: Number(id)
            },
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
        return res.json(cliente);
    }
}
exports.GetByIdClienteController = GetByIdClienteController;
