"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAgendamentoController = void 0;
const client_1 = require("../../db/client");
class GetAllAgendamentoController {
    async handle(req, res) {
        try {
            const agendamentos = await client_1.prismaClient.agendamento.findMany({
                select: {
                    agendamentoId: true,
                    data: true,
                    idCliente: true,
                    idCarro: true
                }
            });
            return res.status(201).json(agendamentos);
        }
        catch (error) {
            return res.status(400).json({
                message: `Error ${error}`
            });
        }
    }
}
exports.GetAllAgendamentoController = GetAllAgendamentoController;
