import { Router } from "express";
import { CreateAgendamentoController } from "../controller/agendamento/CreateAgendamentoController";
import { DeleteAgendamentoController } from "../controller/agendamento/DeleteAgendamentoController";
import { GetAllAgendamentoController } from "../controller/agendamento/GetAllAgendamentoController";
import { GetByIdAgendamentoController } from "../controller/agendamento/GetByIdAgendamentoController";
import { UpdateAgendamentoController } from "../controller/agendamento/UpdateAgendamentoController";

const agendamentoRouter = Router();
const createAgendamentoController = new CreateAgendamentoController();
const getAllAgendamentoController = new GetAllAgendamentoController();
const getByIdAgendamentoController = new GetByIdAgendamentoController();
const deleteAgendamentoController = new DeleteAgendamentoController();
const updateAgendamentoController = new UpdateAgendamentoController();

agendamentoRouter.post('/agendamento/create', createAgendamentoController.handle);

agendamentoRouter.get('/agendamento/list', getAllAgendamentoController.handle);

agendamentoRouter.get('/agendamento/:id', getByIdAgendamentoController.handle);

agendamentoRouter.delete('/agendamento/:id', deleteAgendamentoController.handle);

agendamentoRouter.put('/agendamento/:id', updateAgendamentoController.handle);

export default agendamentoRouter;