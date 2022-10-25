import { Router } from "express";

import { CreatePessoaController } from "../controllers/pessoas/createPessoa";
import { GetAllPessoaController } from "../controllers/pessoas/getAllPessoa";
import { GetByIdPessoaController } from "../controllers/pessoas/getByIdPessoa";
import { GetByNamePessoaController } from "../controllers/pessoas/getByNamePessoa";
import { UpdatePessoaController } from "../controllers/pessoas/updatePessoa";
import { DeletePessoaController } from "../controllers/pessoas/deletePessoa";

const pessoaRouter = Router();
const createPessoaController = new CreatePessoaController();
const getAllPessoaController = new GetAllPessoaController();
const getByIdPessoaController = new GetByIdPessoaController();
const getByNamePessoaController = new GetByNamePessoaController();
const updatePessoaController = new UpdatePessoaController();
const deletePessoaController = new DeletePessoaController();


pessoaRouter.post('/pessoa', createPessoaController.handle);

pessoaRouter.get('/pessoa', getAllPessoaController.handle);

pessoaRouter.get('/pessoa/:id', getByIdPessoaController.handle);

pessoaRouter.get('/pessoa/nome/:nome', getByNamePessoaController.handle);

pessoaRouter.put('/pessoa/:id', updatePessoaController.handle);

pessoaRouter.delete('/pessoa/:id', deletePessoaController.handle);

export default pessoaRouter;