import { Router } from "express";
import { CreateDistribuicaoController } from "../controllers/distribuicao/createDistribuicao"; 
import { DeleteDistribuicaoController } from "../controllers/distribuicao/deleteDistribuicao"; 
import { GetAllDistribuicaoController } from "../controllers/distribuicao/getAllDistribuicao"; 
import { GetByIdDistribuicaoController } from "../controllers/distribuicao/getByIdDistribuicao"; 
import { UpdateDistribuicaoController } from "../controllers/distribuicao/updateDistribuicao";


const distribuicaoRouter = Router();
const createDistribuicaoController = new CreateDistribuicaoController();
const getAllDistribuicaoController = new GetAllDistribuicaoController();
const getByIdDistribuicaoController = new GetByIdDistribuicaoController();
const deleteDistribuicaoController = new DeleteDistribuicaoController();
const updateDistribuicaoController = new UpdateDistribuicaoController();

distribuicaoRouter.get('/distribuicao', getAllDistribuicaoController.handle);

distribuicaoRouter.get('/distribuicao/:id', getByIdDistribuicaoController.handle)

distribuicaoRouter.post('/distribuicao', createDistribuicaoController.handle);

distribuicaoRouter.put('/distribuicao/:id', updateDistribuicaoController.handle);

distribuicaoRouter.delete('/distribuicao/:id', deleteDistribuicaoController.handle);

export default distribuicaoRouter;