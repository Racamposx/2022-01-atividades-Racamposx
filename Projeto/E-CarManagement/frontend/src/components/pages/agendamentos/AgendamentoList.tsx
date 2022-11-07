import styles from "./AgendamentoList.module.css";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import {FaEdit, FaTrash, FaSearch} from 'react-icons/fa';

export default function () {
    const [agendamentos, setAgendamento] = useState<agendamento[]>([]);
    const [agendamentoId, setClienteId] = useState(0)
    let navigate = useNavigate();

    type agendamento = {
        agendamentoId: number
        date: String
        cliente: cliente
        carro: carro
    }

    type carro = {
        carroId: number,
        modelo: String,
        marca: String,
        placa: String,
        cliente: cliente
    }

    type cliente = {
        agendamentoId: number
        nome: String
        sobrenome: String
    }

    //get all data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/agendamento/list');
                const json = await response.json();
                setAgendamento(json)
                console.log(json)
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData()

    }, []);


    //remove
    async function removeCliente(id : number){
        try {
            const response = await fetch(`http://localhost:3000/agendamento/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => {
                setAgendamento(agendamentos.filter((agendamento) => agendamento.agendamentoId != id))
            })
        } catch (error) {
            console.log("error", error);
        }
    }

    //find by id
    const handleChangeId = (e: any) =>{
        setClienteId(e.target.value)
        console.log(agendamentoId)
    }

    async function findById(id: number) {
        try{
            const response = await fetch(`http://localhost:3000/agendamento/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => alert(JSON.stringify(data)))
        }
        catch(error){
            console.log("error", error);
        }
    }

    return (
        <div>
            <h1 className={styles.styled_h1}>Lista de Agendamentos</h1>
            <div>
                <label className={styles.search_text} htmlFor="number">Procurando um cliente específico? Informe seu ID</label>
                <input className={styles.id_input} type="number" name="agendamentoId" onChange={handleChangeId}/>
                <button className={styles.search_button} onClick={
                    () => {
                        findById(agendamentoId)
                    }
                }> <FaSearch/> Procurar </button>
            </div>
            {agendamentos.length != 0 &&
                <>
                    <table className={styles.styled_table}>
                        <>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Data</th>
                                    <th>Modelo</th>
                                    <th>Marca</th>
                                    <th>Placa</th>
                                    <th>Proprietário</th>
                                    <th>Editar</th>
                                    <th>Excluir</th>
                                </tr>
                            </thead>
                            <tbody>

                                {agendamentos.map(function (agendamento: agendamento, index) {
                                    return <tr key={index}>
                                        <td>
                                            {agendamento.agendamentoId}
                                        </td>
                                        <td>
                                            {agendamento.date}
                                        </td>
                                        <td>
                                            {agendamento.carro.modelo}
                                        </td>
                                        <td>
                                            {agendamento.carro.marca}
                                        </td>
                                        <td>
                                            {agendamento.carro.placa}
                                        </td>
                                        <td>
                                            {agendamento.cliente.nome} ${agendamento.cliente.sobrenome}
                                        </td>
                                        <td>
                                            <Link to={`/agendamento/update/${agendamento.agendamentoId}`}>
                                                <FaEdit/> Editar
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={
                                                () => {
                                                    console.log(agendamento.agendamentoId)
                                                    removeCliente(agendamento.agendamentoId)
                                                }
                                            }>
                                                <FaTrash/> Excluir
                                            </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </>
                    </table>
                </>
            }
        </div>
    )
}