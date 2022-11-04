"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAgendamentoController = void 0;
const client_1 = require("../../db/client");
class DeleteAgendamentoController {
    async handle(req, res) {
        const { id } = req.body;
        const agendamento = await client_1.prismaClient.agendamento.delete({
            where: {
                agendamentoId: Number(id)
            },
        });
        return res.json(agendamento);
    }
}
exports.DeleteAgendamentoController = DeleteAgendamentoController;
