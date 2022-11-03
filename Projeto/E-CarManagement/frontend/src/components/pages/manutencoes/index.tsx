import {BrowserRouter, Routes, Route} from "react-router-dom";
import Card from "../../Card";
import styles from "./Manutencao.module.css";
import ManutencaoForm from "./ManutencaoForm";
import ManutencaoList from "./ManutencaoList";

export default function(){
    return (
        <div>
            <Card h1Text="Manutenções" pathCreate="/manutencao/create" pathList="/manutencao/list"/>
                <Routes>
                    <Route path="/manutencao/create" element={<ManutencaoForm/>}/>
                    <Route path="/manutencao/list" element={<ManutencaoList/>}/>
                </Routes>
        </div>
    )
}