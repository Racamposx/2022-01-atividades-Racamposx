import { Router } from "express";
import { CreateUnidadeController } from "../controllers/unidades/createUnidade";
import { DeleteUnidadeController } from "../controllers/unidades/deleteUnidade";
import { GetAllUnidadeController } from "../controllers/unidades/getAllUnidade";
import { GetByIdUnidadeController } from "../controllers/unidades/getByIdUnidade";
import { GetByNameUnidadeController } from "../controllers/unidades/getByNameUnidade";
import { UpdateUnidadeController } from "../controllers/unidades/updateUnidade";

const unidadeRouter = Router();

const getAllUnidadeController = new GetAllUnidadeController();
const getByIdUnidade = new GetByIdUnidadeController();
const getByNameUnidade = new GetByNameUnidadeController();
const createUnidadeController = new CreateUnidadeController();
const updateUnidadeController = new UpdateUnidadeController();
const deleteUnidadeController = new DeleteUnidadeController();

unidadeRouter.get('/unidade', getAllUnidadeController.handle);
unidadeRouter.get('/unidade/:id', getByIdUnidade.handle);
unidadeRouter.get('/unidade/nome/:nome', getByNameUnidade.handle);
unidadeRouter.post('/unidade', createUnidadeController.handle);
unidadeRouter.put('/unidade/:id', updateUnidadeController.handle);
unidadeRouter.delete('/unidade/:id', deleteUnidadeController.handle);

export default unidadeRouter;