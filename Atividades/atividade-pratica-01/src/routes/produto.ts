import { Router } from "express";
import { CreateProdutoController } from "../controllers/produto/createProduto"; 
import { DeleteProdutoController } from "../controllers/produto/deleteProduto"; 
import { GetAllProdutoController } from "../controllers/produto/getAllProduto"; 
import { GetByIdProdutoController } from "../controllers/produto/getByIdProduto"; 
import { UpdateProdutoController } from "../controllers/produto/updateProduto";


const produtoRouter = Router();
const createProdutoController = new CreateProdutoController();
const getAllProdutoController = new GetAllProdutoController();
const getByIdProdutoController = new GetByIdProdutoController();
const deleteProdutoController = new DeleteProdutoController();
const updateProdutoController = new UpdateProdutoController();

produtoRouter.get('/produto', getAllProdutoController.handle);

produtoRouter.get('/produto/:id', getByIdProdutoController.handle)

produtoRouter.post('/produto', createProdutoController.handle);

produtoRouter.put('/produto/:id', updateProdutoController.handle);

produtoRouter.delete('/produto/:id', deleteProdutoController.handle);

export default produtoRouter;