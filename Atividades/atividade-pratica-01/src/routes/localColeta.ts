import { Router } from "express"
import { CreateLocalColetaController } from "../controllers/locais-coleta/createLocalColeta";
import { GetByIdLocalColetaController } from "../controllers/locais-coleta/getByIdLocalColeta";
import { GetByNameLocalColetaController } from "../controllers/locais-coleta/getByNameLocalColeta";
import { UpdateLocalColetaController } from "../controllers/locais-coleta/updateLocalColeta";
import { DeleteLocalColetaController } from "../controllers/locais-coleta/deleteLocalColeta";
import { GetAllLocalColetaController } from "../controllers/locais-coleta/getAllLocalColeta";

const localColetaRouter = Router();
const createLocalColetaController = new CreateLocalColetaController();
const getAllLocalColeta = new GetAllLocalColetaController();
const getByNameLocalColetaController = new GetByNameLocalColetaController();
const getByIdLocalColetaController = new GetByIdLocalColetaController();
const updateLocalColetaController = new UpdateLocalColetaController();
const deleteLocalColetaController = new DeleteLocalColetaController();

localColetaRouter.get('/local-coleta', getAllLocalColeta.handle);
localColetaRouter.get('/local-coleta/:id', getByIdLocalColetaController.handle);
localColetaRouter.get('/local-coleta/nome/:nome', getByNameLocalColetaController.handle)
localColetaRouter.post('/local-coleta', createLocalColetaController.handle)
localColetaRouter.put('/local-coleta/:id', updateLocalColetaController.handle);
localColetaRouter.delete('/local-coleta/:id', deleteLocalColetaController.handle);

export default localColetaRouter;