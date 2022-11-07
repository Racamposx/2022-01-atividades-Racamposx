import styles from "./CarroForm.module.css";
import Input from "../../form/Input";
import SubmitButton from "../../form/SubmitButton";
import Select from "../../form/Select";
import { useEffect, useState } from 'react';

export default function(){
    const [clientes, setClientes] = useState<cliente[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/cliente/list');
                const json = await response.json();
                setClientes(json)
                console.log(json)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData()

    }, []);
    
    
    type endereco = {
        id: number
        rua: String
        numero: String
        complemento: String
        cep: String
        cidade: String
    }

    type cliente = {
        clienteId: number
        nome: String
        sobrenome: String
        cpf: String,
        endereco: endereco
    }

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
            <>

                <label htmlFor="">Selecione o dono do veículo</label>
                <select name="cliente_id" >
                    <option value="">Selecione uma opção</option>
                    {clientes.map((cliente) => {
                        <option value={cliente.clienteId} key={cliente.clienteId}>`${cliente.clienteId} - ${cliente.nome} ${cliente.sobrenome}`</option>
                    })
                        
                    }
                </select>
                
            </>
            <SubmitButton text={"Cadastrar cliente"}/>
        </form>
    )
}