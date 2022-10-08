import { Router, Request, Response } from "express";

import { CreateCidadeController } from "../controllers/cidades/createCidade";
import { GetAllCidadeController } from "../controllers/cidades/getAllCidade";
import { GetByIdCidadeController } from "../controllers/cidades/getByIdCidade";
import { GetByNameCidadeController } from "../controllers/cidades/getByNameCidade";
import { UpdateCidadeController } from "../controllers/cidades/updateCidade";
import { DeleteCidadeController } from "../controllers/cidades/deleteCidade";


const cidadeRouter = Router();
const getAllCidadeController = new GetAllCidadeController();
const createCidadeController = new CreateCidadeController();
const getByIdCidade = new GetByIdCidadeController();
const getByNameCidade = new GetByNameCidadeController();
const updateCidadeController = new UpdateCidadeController();
const deleteCidadeController = new DeleteCidadeController();

cidadeRouter.get('/cidade', getAllCidadeController.handle);

cidadeRouter.get('/cidade/:id', getByIdCidade.handle);

cidadeRouter.get('/cidade/nome/:nome', getByNameCidade.handle);

cidadeRouter.post('/cidade', createCidadeController.handle);

cidadeRouter.put('/cidade/:id', updateCidadeController.handle);

cidadeRouter.delete('/cidade/:id', deleteCidadeController.handle);

export default cidadeRouter;