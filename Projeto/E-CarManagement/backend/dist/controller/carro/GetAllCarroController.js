"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCarroController = void 0;
const client_1 = require("../../db/client");
class GetAllCarroController {
    async handle(req, res) {
        try {
            const carros = await client_1.prismaClient.carro.findMany({
                select: {
                    carroId: true,
                    idCliente: true,
                    modelo: true,
                    marca: true
                }
            });
            return res.status(201).json(carros);
        }
        catch (error) {
            return res.status(400).json({
                message: `Error ${error}`
            });
        }
    }
}
exports.GetAllCarroController = GetAllCarroController;
