import {Routes, Route, Outlet} from "react-router-dom";
import styles from "./Cliente.module.css";
import ClienteForm from "./ClienteForm";
import ClienteList from "./ClienteList";
import Card from "../../Card";

export default function(){
    return (
        <div>
            <Card h1Text="Clientes" pathCreate="/cliente/create" pathList="/cliente/list"/>
                <Routes>
                    <Route path="/create" element={<ClienteForm/>}/>
                    <Route path="/cliente/list" element={<ClienteList/>}/>
                </Routes>
        </div>
    )
}