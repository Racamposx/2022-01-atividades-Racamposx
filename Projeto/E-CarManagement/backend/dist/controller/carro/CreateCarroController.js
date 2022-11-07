"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCarroController = void 0;
const client_1 = require("../../db/client");
class CreateCarroController {
    async handle(req, res) {
        const { modelo, marca, placa, id } = req.body;
        try {
            const carro = await client_1.prismaClient.carro.create({
                data: {
                    modelo: modelo,
                    marca: marca,
                    placa: placa,
                    cliente: {
                        connect: {
                            clienteId: Number(id)
                        }
                    }
                }
            });
            return res.status(201).json(carro);
        }
        catch (error) {
            return res.status(400).json({
                message: `Error ${error}`
            });
        }
    }
}
exports.CreateCarroController = CreateCarroController;
