"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClienteController = void 0;
const client_1 = require("../../db/client");
class UpdateClienteController {
    async handle(req, res) {
        const { nome, sobrenome, cpf, rua, numero, complemento, cep, cidade } = req.body;
        const id = req.params;
        try {
            const clienteFind = await client_1.prismaClient.cliente.findUnique({
                where: {
                    clienteId: Number(id)
                }
            });
            console.log(clienteFind);
            if (clienteFind) {
                const endereco = await client_1.prismaClient.endereco.update({
                    where: {
                        enderecoId: Number(clienteFind.idEndereco)
                    },
                    data: {
                        rua,
                        numero,
                        complemento,
                        cep,
                        cidade,
                    }
                });
            }
            const cliente = await client_1.prismaClient.cliente.update({
                where: {
                    clienteId: Number(id)
                },
                data: {
                    nome,
                    sobrenome,
                    cpf,
                    endereco: {
                        connect: {
                            enderecoId: Number(id)
                        }
                    }
                }
            });
            return res.json(cliente);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ message: `erro: ${error}` });
        }
    }
}
exports.UpdateClienteController = UpdateClienteController;
