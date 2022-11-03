import styles from "./Carro.module.css"
import {Routes, Route} from "react-router-dom";
import Card from "../../Card";
import CarroForm from "./CarroForm";
import CarroList from "./CarroList";

export default function(){
    return (
        <div>
            <Card h1Text="Carros" pathCreate="/carro/create" pathList="/carro/list"/>
                <Routes>
                    <Route path="/carro/create" element={<CarroForm/>}/>
                    <Route path="/carro/list" element={<CarroList/>}/>
                </Routes>
        </div>
    )
}