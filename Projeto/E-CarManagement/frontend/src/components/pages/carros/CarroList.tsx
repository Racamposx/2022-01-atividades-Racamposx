import styles from "./CarroList.module.css";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import {FaEdit, FaTrash, FaSearch} from 'react-icons/fa';

export default function () {
    const [carros, setCarros] = useState<carro[]>([]);
    const [carroId, setCarroId] = useState(0)
    let navigate = useNavigate();


    type carro = {
        carroId: number,
        modelo: String,
        marca: String,
        placa: String,
        cliente: cliente
    }

    type cliente = {
        clienteId: number
        nome: String
        sobrenome: String
        cpf: String,
    }

    //get all data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/carro/list');
                const json = await response.json();
                setCarros(json)
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
            const response = await fetch(`http://localhost:3000/carro/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => {
                setCarros(carros.filter((carro) => carro.carroId != id))
            })
        } catch (error) {
            console.log("error", error);
        }
    }

    //find by id
    const handleChangeId = (e: any) =>{
        setCarroId(e.target.value)
        console.log(carroId)
    }

    async function findById(id: number) {
        try{
            const response = await fetch(`http://localhost:3000/carro/${id}`, {
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
            <h1 className={styles.styled_h1}>Lista de Veículos</h1>
            <div>
                <label className={styles.search_text} htmlFor="number">Procurando um carro específico? Informe seu ID</label>
                <input className={styles.id_input} type="number" name="carroId" onChange={handleChangeId}/>
                <button className={styles.search_button} onClick={
                    () => {
                        findById(carroId)
                    }
                }> <FaSearch/> Procurar </button>
            </div>
            {carros.length != 0 &&
                <>
                    <table className={styles.styled_table}>
                        <>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Modelo</th>
                                    <th>Marca</th>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>CPF</th>
                                    <th>Editar</th>
                                    <th>Excluir</th>
                                </tr>
                            </thead>
                            <tbody>

                                {carros.map(function (carro: carro, index) {
                                    return <tr key={index}>
                                        <td>
                                            {carro.carroId}
                                        </td>
                                        <td>
                                            {carro.modelo}
                                        </td>
                                        <td>
                                            {carro.marca}
                                        </td>
                                        <td>
                                            {carro.cliente.nome}
                                        </td>
                                        <td>
                                            {carro.cliente.sobrenome}
                                        </td>   
                                        <td>
                                            {carro.cliente.cpf}
                                        </td>
                                        
                                        <td>
                                            <Link to={`/carro/update/${carro.carroId}`}>
                                                <FaEdit/> Editar
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={
                                                () => {
                                                    console.log(carro.carroId)
                                                    removeCliente(carro.carroId)
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