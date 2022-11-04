"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAgendamentoController = void 0;
const client_1 = require("../../db/client");
class CreateAgendamentoController {
    async handle(req, res) {
        const { date, idCarro, idCliente } = req.body;
        try {
            const agendamento = await client_1.prismaClient.agendamento.create({
                data: {
                    data: date,
                    idCarro: Number(idCarro),
                    idCliente: Number(idCliente)
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
exports.CreateAgendamentoController = CreateAgendamentoController;
