"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAgendamentoController = void 0;
const client_1 = require("../../db/client");
class UpdateAgendamentoController {
    async handle(req, res) {
        const { date } = req.body;
        const { id } = req.params;
        try {
            const agendamento = await client_1.prismaClient.agendamento.update({
                where: {
                    agendamentoId: Number(id)
                },
                data: {
                    data: date
                }
            });
            return res.status(201).json(agendamento);
        }
        catch (error) {
            return res.status(400).json({
                message: `Error ${error}`
            });
        }
    }
}
exports.UpdateAgendamentoController = UpdateAgendamentoController;
