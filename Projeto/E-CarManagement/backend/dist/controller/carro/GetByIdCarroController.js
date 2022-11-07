"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdCarroController = void 0;
const client_1 = require("../../db/client");
class GetByIdCarroController {
    async handle(req, res) {
        const { id } = req.params;
        const carro = await client_1.prismaClient.carro.findUnique({
            where: {
                carroId: Number(id)
            },
            select: {
                carroId: true,
                idCliente: true,
                modelo: true,
                marca: true,
                placa: true,
                cliente: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        cpf: true
                    }
                }
            }
        });
        return res.json(carro);
    }
}
exports.GetByIdCarroController = GetByIdCarroController;
