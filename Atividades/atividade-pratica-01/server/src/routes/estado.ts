import { Router, Request, Response } from "express";
import { CreateEstadoController } from "../controllers/estados/createEstado";
import { GetAllEstadoController } from "../controllers/estados/getAllEstado";
import { GetByIdEstado } from "../controllers/estados/getByIdEstado";
import { GetByNameEstado } from "../controllers/estados/getByNameEstado";
import { UpdateEstadoController } from "../controllers/estados/updateEstado";
import { DeleteEstadoController } from "../controllers/estados/deleteEstado";


const estadoRouter = Router();
const getAllEstadoController = new GetAllEstadoController();
const createEstadoController = new CreateEstadoController();
const getByIdEstado = new GetByIdEstado();
const getByNameEstado = new GetByNameEstado();
const updateEstadoController = new UpdateEstadoController();
const deleteEstadoController = new DeleteEstadoController();

estadoRouter.get('/estado', getAllEstadoController.handle);

estadoRouter.get('/estado/:id', getByIdEstado.handle);

estadoRouter.get('/estado/nome/:nome', getByNameEstado.handle);

estadoRouter.post('/estado', createEstadoController.handle);

estadoRouter.put('/estado/:id', updateEstadoController.handle);

estadoRouter.delete('/estado/:id', deleteEstadoController.handle);

export default estadoRouter;