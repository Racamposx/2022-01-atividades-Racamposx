"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdAgendamentoController = void 0;
const client_1 = require("../../db/client");
class GetByIdAgendamentoController {
    async handle(req, res) {
        const { id } = req.params;
        const agendamento = await client_1.prismaClient.agendamento.findUnique({
            where: {
                agendamentoId: Number(id)
            },
            select: {
                agendamentoId: true,
                date: true,
                carro: {
                    select: {
                        modelo: true,
                        marca: true
                    }
                },
                cliente: {
                    select: {
                        nome: true,
                        sobrenome: true,
                        cpf: true
                    }
                }
            }
        });
        return res.json(agendamento);
    }
}
exports.GetByIdAgendamentoController = GetByIdAgendamentoController;
