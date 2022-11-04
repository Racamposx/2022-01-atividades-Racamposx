import { Router } from "express";

import { CreateManutencaoController } from "../controller/manutencao/CreateManutecaoController";
import { DeleteManutencaoController } from "../controller/manutencao/DeleteManutencaoController";
import { GetAllManutencaoController } from "../controller/manutencao/GetAllManutencaoController";
import { GetByIdManutencaoController } from "../controller/manutencao/GetByIdManutencaoController";
import { UpdateManutencaoController } from "../controller/manutencao/UpdateManutencaoController";

const manutencaoRouter = Router();
const createManutencaoController = new CreateManutencaoController();
const getAllManutencaoController = new DeleteManutencaoController();
const getByIdManutencaoController = new GetAllManutencaoController();
const deleteManutencaoController = new GetByIdManutencaoController();
const updateManutencaoController = new UpdateManutencaoController();

manutencaoRouter.post('/manutencao/create', createManutencaoController.handle);

manutencaoRouter.get('/manutencao/list', getAllManutencaoController.handle);
    
manutencaoRouter.get('/manutencao/:id', getByIdManutencaoController.handle);

manutencaoRouter.delete('/manutencao/:id', deleteManutencaoController.handle);

manutencaoRouter.put('/manutencao/:id', updateManutencaoController.handle);

export default manutencaoRouter;