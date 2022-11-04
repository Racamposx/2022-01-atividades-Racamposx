import styles from "./CarroForm.module.css";
import Input from "../../form/Input";
import SubmitButton from "../../form/SubmitButton";
import Select from "../../form/Select";
import { useEffect, useState } from 'react';

export default function(){
    const [clientes, setClientes] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/cliente/list');
                const json = await response.json();
                setClientes(json)
            } catch (error) {
                console.log("error", error);
            }
        };
                                                 
    }, []);


    return (
        <form className={styles.carro_form}>
            <h3>Dados dos veículos</h3>
            <Input
                type="text"
                text="Modelo"
                name="modelo"
                placeholder="Insira o modelo"
            />

            <Input
                type="text"
                text="Marca"
                name="marca"
                placeholder="Insira a marca"
            />

            <Input
                type="text"
                text="CPF"
                name="cpf"
                placeholder="Insira o CPF"
            />

            <SubmitButton text={"Cadastrar cliente"}/>
        </form>
    )
}