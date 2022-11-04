import { Router } from "express";

import { CreateCarroController } from "../controller/carro/CreateCarroController";
import { DeleteCarroController } from "../controller/carro/DeleteCarroController";
import { GetAllCarroController } from "../controller/carro/GetAllCarroController";
import { GetByIdCarroController } from "../controller/carro/GetByIdCarroController";
import { UpdateCarroController } from "../controller/carro/UpdateCarroController";

const carroRouter = Router();
const createCarroController = new CreateCarroController();
const getAllCarroController = new GetAllCarroController();
const getByIdCarroController = new GetByIdCarroController();
const deleteCarroController = new DeleteCarroController();
const updateCarroController = new UpdateCarroController();

carroRouter.post('/carro/create', createCarroController.handle);

carroRouter.get('/carro/list', getAllCarroController.handle);

carroRouter.get('/carro/:id', getByIdCarroController.handle);

carroRouter.delete('/carro/:id', deleteCarroController.handle);

carroRouter.put('/carro/:id', updateCarroController.handle);

export default carroRouter;