"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteController = void 0;
const client_1 = require("../../db/client");
class CreateClienteController {
    async handle(req, res) {
        const { rua, numero, complemento, cep, cidade, nome, sobrenome, cpf } = req.body;
        try {
            const endereco = await client_1.prismaClient.endereco.create({
                data: {
                    rua,
                    numero,
                    complemento,
                    cep,
                    cidade
                }
            });
            const cliente = await client_1.prismaClient.cliente.create({
                data: {
                    nome,
                    sobrenome,
                    cpf,
                    endereco: {
                        connect: {
                            enderecoId: endereco.enderecoId
                        }
                    }
                }
            });
            return res.status(201).json(cliente);
        }
        catch (error) {
            return res.status(400).json({
                message: 'unexpected error =('
            });
        }
    }
}
exports.CreateClienteController = CreateClienteController;
