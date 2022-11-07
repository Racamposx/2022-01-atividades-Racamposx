import styles from "./ClienteList.module.css";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import {FaEdit, FaTrash, FaSearch} from 'react-icons/fa';

export default function () {
    const [clientes, setClientes] = useState<cliente[]>([]);
    const [clienteId, setClienteId] = useState(0)
    let navigate = useNavigate();


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

    //get all data
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


    //remove
    async function removeCliente(id : number){
        try {
            const response = await fetch(`http://localhost:3000/cliente/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => {
                setClientes(clientes.filter((cliente) => cliente.clienteId != id))
            })
        } catch (error) {
            console.log("error", error);
        }
    }

    //find by id
    const handleChangeId = (e: any) =>{
        setClienteId(e.target.value)
        console.log(clienteId)
    }

    async function findById(id: number) {
        try{
            const response = await fetch(`http://localhost:3000/cliente/${id}`, {
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
            <h1 className={styles.styled_h1}>Lista de Clientes</h1>
            <div>
                <label className={styles.search_text} htmlFor="number">Procurando um cliente específico? Informe seu ID</label>
                <input className={styles.id_input} type="number" name="clienteId" onChange={handleChangeId}/>
                <button className={styles.search_button} onClick={
                    () => {
                        findById(clienteId)
                    }
                }> <FaSearch/> Procurar </button>
            </div>
            {clientes.length != 0 &&
                <>
                    <table className={styles.styled_table}>
                        <>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>CPF</th>
                                    <th>Rua</th>
                                    <th>Número</th>
                                    <th>Complemento</th>
                                    <th>CEP</th>
                                    <th>Cidade</th>
                                    <th>Editar</th>
                                    <th>Excluir</th>
                                </tr>
                            </thead>
                            <tbody>

                                {clientes.map(function (cliente: cliente, index) {
                                    return <tr key={index}>
                                        <td>
                                            {cliente.clienteId}
                                        </td>
                                        <td>
                                            {cliente.nome}
                                        </td>
                                        <td>
                                            {cliente.sobrenome}
                                        </td>
                                        <td>
                                            {cliente.cpf}
                                        </td>
                                        <td>
                                            {cliente.endereco.rua}
                                        </td>
                                        <td>
                                            {cliente.endereco.numero}
                                        </td>
                                        <td>
                                            {cliente.endereco.complemento}
                                        </td>
                                        <td>
                                            {cliente.endereco.cep}
                                        </td>
                                        <td>
                                            {cliente.endereco.cidade}
                                        </td>
                                        <td>
                                            <Link to={`/cliente/update/${cliente.clienteId}`}>
                                                <FaEdit/> Editar
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={
                                                () => {
                                                    console.log(cliente.clienteId)
                                                    removeCliente(cliente.clienteId)
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