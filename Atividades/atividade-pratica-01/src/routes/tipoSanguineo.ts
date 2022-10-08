import { Router } from "express";
import { CreateTipoSangueController } from "../controllers/tipo-sanguineo/createTipoSangue";
import { DeleteTipoSangueController } from "../controllers/tipo-sanguineo/deleteTipoSangue";
import { GetAllTipoSangueController } from "../controllers/tipo-sanguineo/getAllTipoSangue";
import { GetByIdTipoSangueController } from "../controllers/tipo-sanguineo/getByIdTipoSangue";
import { UpdateTipoSangueController } from "../controllers/tipo-sanguineo/updateTipoSangue";


const tipoSanguineoRouter = Router();
const createTipoSangueController = new CreateTipoSangueController();
const getAllTipoSangueController = new GetAllTipoSangueController();
const getByIdTipoSangueController = new GetByIdTipoSangueController();
const deleteTipoSangueController = new DeleteTipoSangueController();
const updateTipoSangueController = new UpdateTipoSangueController();

tipoSanguineoRouter.get('/sangues', getAllTipoSangueController.handle);

tipoSanguineoRouter.get('/sangues/:id', getByIdTipoSangueController.handle)

tipoSanguineoRouter.post('/sangues', createTipoSangueController.handle);

tipoSanguineoRouter.put('/sangues/:id', updateTipoSangueController.handle);

tipoSanguineoRouter.delete('/sangues/:id', deleteTipoSangueController.handle);

export default tipoSanguineoRouter;