"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdAgendamentoController = void 0;
const client_1 = require("../../db/client");
class GetByIdAgendamentoController {
    async handle(req, res) {
        const { id } = req.body;
        const agendamento = await client_1.prismaClient.agendamento.findUnique({
            where: {
                agendamentoId: Number(id)
            },
            select: {
                agendamentoId: true,
                data: true,
                idCliente: true,
                idCarro: true
            }
        });
        return res.json(agendamento);
    }
}
exports.GetByIdAgendamentoController = GetByIdAgendamentoController;
