"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCarroController = void 0;
const client_1 = require("../../db/client");
class DeleteCarroController {
    async handle(req, res) {
        const { id } = req.params;
        const carro = await client_1.prismaClient.carro.delete({
            where: {
                carroId: Number(id)
            },
        });
        return res.json(carro);
    }
}
exports.DeleteCarroController = DeleteCarroController;
