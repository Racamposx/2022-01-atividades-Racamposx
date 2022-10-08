import express from 'express';
import cidadeRouter from './routes/cidade';
import distribuicaoRouter from './routes/distribuicao';
import doacaoRouter from './routes/doacao';
import estadoRouter from './routes/estado';
import localColetaRouter from './routes/localColeta';
import pessoaRouter from './routes/pessoa';
import produtoRouter from './routes/produto';
import tipoSanguineoRouter from './routes/tipoSanguineo';
import unidadeRouter from './routes/unidade';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(unidadeRouter);
app.use(tipoSanguineoRouter);
app.use(localColetaRouter);
app.use(pessoaRouter);
app.use(doacaoRouter);
app.use(produtoRouter);
app.use(distribuicaoRouter);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});