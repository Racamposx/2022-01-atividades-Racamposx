import styles from "./ManutencaoList.module.css";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import {FaEdit, FaTrash, FaSearch} from 'react-icons/fa';

export default function () {
    const [manutencoes, setManutencao] = useState<manutencao[]>([]);
    const [manutencaoId, setClienteId] = useState(0)
    let navigate = useNavigate();

    type manutencao = {
        descricao: string
        manutencaoId: number
        dataRealizada: String
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
        manutencaoId: number
        nome: String
        sobrenome: String
    }

    //get all data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/manutencao/list');
                const json = await response.json();
                setManutencao(json)
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
            const response = await fetch(`http://localhost:3000/manutencao/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(data => {
                setManutencao(manutencoes.filter((manutencao) => manutencao.manutencaoId != id))
            })
        } catch (error) {
            console.log("error", error);
        }
    }

    //find by id
    const handleChangeId = (e: any) =>{
        setClienteId(e.target.value)
        console.log(manutencaoId)
    }

    async function findById(id: number) {
        try{
            const response = await fetch(`http://localhost:3000/manutencao/${id}`, {
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
            <h1 className={styles.styled_h1}>Lista de Manutencaos</h1>
            <div>
                <label className={styles.search_text} htmlFor="number">Procurando um cliente específico? Informe seu ID</label>
                <input className={styles.id_input} type="number" name="manutencaoId" onChange={handleChangeId}/>
                <button className={styles.search_button} onClick={
                    () => {
                        findById(manutencaoId)
                    }
                }> <FaSearch/> Procurar </button>
            </div>
            {manutencoes.length != 0 &&
                <>
                    <table className={styles.styled_table}>
                        <>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Data</th>
                                    <th>Descricao</th>
                                    <th>Carro</th>                         
                                    <th>Editar</th>
                                    <th>Excluir</th>
                                </tr>
                            </thead>
                            <tbody>

                                {manutencoes.map(function (manutencao: manutencao, index) {
                                    return <tr key={index}>
                                        <td>
                                            {manutencao.manutencaoId}
                                        </td>
                                        <td>
                                            {manutencao.dataRealizada}
                                        </td>
                                        <td>
                                            {manutencao.descricao}
                                        </td>
                                        <td>
                                            {manutencao.carro.modelo} - {manutencao.carro.marca} {manutencao.carro.placa}
                                        </td>                            
                                        <td>
                                            <Link to={`/manutencao/update/${manutencao.manutencaoId}`}>
                                                <FaEdit/> Editar
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={
                                                () => {
                                                    console.log(manutencao.manutencaoId)
                                                    removeCliente(manutencao.manutencaoId)
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