"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClienteController = void 0;
const client_1 = require("../../db/client");
class DeleteClienteController {
    async handle(req, res) {
        const { id } = req.params;
        const cliente = await client_1.prismaClient.cliente.delete({
            where: {
                clienteId: Number(id)
            }
        });
        return res.json(cliente);
    }
}
exports.DeleteClienteController = DeleteClienteController;
