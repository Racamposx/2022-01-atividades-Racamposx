"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const cliente_1 = __importDefault(require("./routes/cliente"));
const agendamento_1 = __importDefault(require("./routes/agendamento"));
const manutencao_1 = __importDefault(require("./routes/manutencao"));
const carro_1 = __importDefault(require("./routes/carro"));
dotenv.config();
const app = (0, express_1.default)();
const cors = require("cors");
app.use(cors({
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
    origin: '*'
}));
app.options('*', cors());
const PORT = process.env.PORT || 5555;
app.use(express_1.default.json());
app.use(cliente_1.default);
app.use(carro_1.default);
app.use(agendamento_1.default);
app.use(manutencao_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
