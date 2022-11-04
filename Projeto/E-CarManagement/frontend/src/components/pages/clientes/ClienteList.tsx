import { useState, useEffect } from 'react';
//import { ClienteCard } from './clienteResources/ClienteCard';

export default function () {
    const [clientes, setClientes] = useState([]);

    type endereco = {
        id: number
        rua: String
        numero: String
        complemento: String
        cep: String
        cidade: String
    }

    type cliente = {
        id: number
        nome: String
        sobrenome: String
        cpf: String,
        endereco: endereco
    }

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

        fetchData()

    }, []);



    return (
        <div>
            <h1>Lista de Clientes</h1>
            {clientes.length != 0 &&
                <>
                    <table>
                        <>
                            <thead>

                                <tr>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>CPF</th>
                                    <th>Rua</th>
                                    <th>Número</th>
                                    <th>Complemento</th>
                                    <th>CEP</th>
                                    <th>Cidade</th>
                                </tr>
                            </thead>
                            <tbody>

                                {clientes.map(function (cliente: cliente, index) {
                                    return <tr key={index}>
                                        <td>
                                            {cliente.nome}
                                        </td>
                                        <td>
                                            {cliente.sobrenome}
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



/*
{
                clientes.length > 0 &&
                    clientes.map((cliente) => (
                        <ClienteCard nome={cliente.nome}/>
                    ))
            }

*/