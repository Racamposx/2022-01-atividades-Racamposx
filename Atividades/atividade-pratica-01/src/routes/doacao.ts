import { Router } from "express";
import { CreateDoacaoController } from "../controllers/doacoes/createDoacao"; 
import { DeleteDoacaoController } from "../controllers/doacoes/deleteDoacao"; 
import { GetAllDoacaoController } from "../controllers/doacoes/getAllDoacao"; 
import { GetByIdDoacaoController } from "../controllers/doacoes/getByIdDoacao"; 
import { UpdateDoacaoController } from "../controllers/doacoes/updateDoacao";


const doacaoRouter = Router();
const createDoacaoController = new CreateDoacaoController();
const getAllDoacaoController = new GetAllDoacaoController();
const getByIdDoacaoController = new GetByIdDoacaoController();
const deleteDoacaoController = new DeleteDoacaoController();
const updateDoacaoController = new UpdateDoacaoController();

doacaoRouter.get('/doacao', getAllDoacaoController.handle);

doacaoRouter.get('/doacao/:id', getByIdDoacaoController.handle)

doacaoRouter.post('/doacao', createDoacaoController.handle);

doacaoRouter.put('/doacao/:id', updateDoacaoController.handle);

doacaoRouter.delete('/doacao/:id', deleteDoacaoController.handle);

export default doacaoRouter;