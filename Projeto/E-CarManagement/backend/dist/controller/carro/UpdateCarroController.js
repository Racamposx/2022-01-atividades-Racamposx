"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarroController = void 0;
const client_1 = require("../../db/client");
class UpdateCarroController {
    async handle(req, res) {
        const { modelo, marca, placa } = req.body;
        const { id } = req.params;
        try {
            const carroFind = await client_1.prismaClient.carro.findUnique({
                where: {
                    carroId: Number(id)
                }
            });
            console.log(carroFind);
            if (carroFind) {
                const carro = await client_1.prismaClient.carro.update({
                    where: {
                        carroId: Number(id)
                    },
                    data: {
                        modelo: modelo,
                        marca: marca,
                        placa: placa
                    }
                });
                return res.json(carro);
            }
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ message: `erro: ${error}` });
        }
    }
}
exports.UpdateCarroController = UpdateCarroController;
