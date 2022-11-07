import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Layout components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/home";

import Carros from "./components/pages/carros";
import CarroForm from "./components/pages/carros/CarroForm";
import CarroList from "./components/pages/carros/CarroList";
import Clientes from "./components/pages/clientes";
import ClienteForm from "./components/pages/clientes/ClienteForm";
import ClienteEdit from "./components/pages/clientes/ClienteEdit";
import ClienteList from "./components/pages/clientes/ClienteList";
import Agendamentos from "./components/pages/agendamentos";
import AgendamentoForm from "./components/pages/agendamentos/AgendamentoForm";
import AgendamentoList from "./components/pages/agendamentos/AgendamentoList";
import Manutencoes from "./components/pages/manutencoes";
import ManutencaoForm from "./components/pages/manutencoes/ManutencaoForm";
import ManutencaoList from "./components/pages/manutencoes/ManutencaoList";

import ErrorPage from "./components/pages/ErrorPage";


//Initial screen
function App() {

  return (
    
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cliente/" element={<Clientes/>}/>
            <Route path="/cliente/create" element={<ClienteForm/>}/>
            <Route path="/cliente/update/:id" element={<ClienteEdit/>}/>
            <Route path="/cliente/list" element={<ClienteList/>}/>

            <Route path="/carro" element={<Carros/>}/>
            <Route path="/carro/update/:id" element={<CarroForm/>}/>
            <Route path="/carro/list" element={<CarroList/>}/>
            <Route path="/carro/create" element={<CarroForm/>}/>

            <Route path="/agendamento" element={<Agendamentos/>}/>
            <Route path="/agendamento/create" element={<AgendamentoForm/>}/>
            <Route path="/agendamento/update/:id" element={<AgendamentoForm/>}/>
            <Route path="/agendamento/list" element={<AgendamentoList/>}/>


            <Route path="/manutencao" element={<Manutencoes/>}/>
            <Route path="/manutencao/create" element={<ManutencaoForm/>}/>
            <Route path="/manutencao/update/:id" element={<ManutencaoForm/>}/>
            <Route path="/manutencao/list" element={<ManutencaoList/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>

        
    </div>
  )
}

export default App
