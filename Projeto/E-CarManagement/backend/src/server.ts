import express from "express";
import * as dotenv from "dotenv";
import clienteRouter from "./routes/cliente";
import agendamentoRouter from "./routes/agendamento";
import manutencaoRouter from "./routes/manutencao";
import carroRouter from "./routes/carro";

dotenv.config();
const app = express();

const cors = require("cors");

app.use(cors({
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
    origin: '*'
}));
app.options('*', cors());

const PORT = process.env.PORT || 5555;
app.use(express.json());

app.use(clienteRouter);
app.use(carroRouter);
app.use(agendamentoRouter);
app.use(manutencaoRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});