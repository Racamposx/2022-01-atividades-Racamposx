import Card from "../../Card";
import {Routes, Route} from "react-router-dom";
import styles from "./Agendamento.module.css";
import AgendamentoForm from "./AgendamentoForm";
import AgendamentoList from "./AgendamentoList";

export default function(){
    return (
        <div>
            <Card h1Text="Agendamento" pathCreate="/agendamento/create" pathList="/agendamento/list"/>
                <Routes>
                    <Route path="/agendamento/create" element={<AgendamentoForm/>}/>
                    <Route path="/agendamento/list" element={<AgendamentoList/>}/>
                </Routes>
        </div>
    )
}