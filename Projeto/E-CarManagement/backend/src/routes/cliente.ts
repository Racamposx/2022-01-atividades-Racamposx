import { Router } from "express";

import { CreateClienteController } from "../controller/cliente/CreateClienteController";
import { DeleteClienteController } from "../controller/cliente/DeleteClienteController";
import { GetAllClienteController } from "../controller/cliente/GetAllClienteController";
import { GetByIdClienteController } from "../controller/cliente/GetByIdClienteController";
import { UpdateClienteController } from "../controller/cliente/UpdateClienteController";

const clienteRouter = Router();
const createClienteController = new CreateClienteController();
const getAllClienteController = new GetAllClienteController();
const getByIdClienteController = new GetByIdClienteController();
const deleteClienteController = new DeleteClienteController();
const updateClienteController = new UpdateClienteController();

clienteRouter.post('/cliente/create', createClienteController.handle);

clienteRouter.get('/cliente/list', getAllClienteController.handle);

clienteRouter.get('/cliente/:id', getByIdClienteController.handle);

clienteRouter.delete('/cliente/:id', deleteClienteController.handle);

clienteRouter.put('/cliente/:id', updateClienteController.handle);

export default clienteRouter;