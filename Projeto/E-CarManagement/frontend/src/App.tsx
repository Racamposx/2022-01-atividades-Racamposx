import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/home";
import Carros from "./components/pages/carros";
import Clientes from "./components/pages/clientes";
import Agendamentos from "./components/pages/agendamentos";
import Manutencoes from "./components/pages/manutencoes";

//Initial screen
function App() {

  return (
    
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cliente/*" element={<Clientes/>}/>
            <Route path="/carro" element={<Carros/>}/>
            <Route path="/agendamento" element={<Agendamentos/>}/>
            <Route path="/manutencao" element={<Manutencoes/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>

        
    </div>
  )
}

export default App
