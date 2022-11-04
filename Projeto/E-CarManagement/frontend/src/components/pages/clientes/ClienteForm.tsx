import styles from "./ClienteForm.module.css";
import Input from "../../form/Input";
import SubmitButton from "../../form/SubmitButton";

import { useState } from "react";
import api from "../../../services/api";

export default function(){
    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ rua, setRua ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ complemento, setComplemento] = useState('');
    const [ cep, setCep ] = useState('');
    const [ cidade, setCidade] = useState('');
    
    const createCliente = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
        const data = {
            rua,
            numero,
            complemento,
            cep,
            cidade,
            nome,
            sobrenome,
            cpf
        }

        try{
            await api.post('/cliente/create', data);
            alert("Cadastrado com sucesso!");
        }
        catch(error){
            console.log(error);
        }
    } 
    
    const handleChangeName= (e: any) =>{
        setNome(e.target.value)
        console.log(nome)
    }
    const handleChangeSobrenome= (e: any) =>{
        setSobrenome(e.target.value)
        console.log(sobrenome)
    }
    const handleChangeCpf= (e: any) =>{
        setCpf(e.target.value)
        console.log(cpf)
    }
    const handleChangeRua= (e: any) =>{
        setRua(e.target.value)
        console.log(rua)
    }
    const handleChangeNumero= (e: any) =>{
        setNumero(e.target.value)
        console.log(numero)
    }

    const handleChangeComplemento= (e: any) =>{
        setComplemento(e.target.value)
        console.log(complemento)
    }
    
    const handleChangeCep= (e: any) =>{
        setCep(e.target.value)
        console.log(cep)
    }

    const handleChangeCidade= (e: any) =>{
        setCidade(e.target.value)
        console.log(cidade)
    }



    return (
        
        <form onSubmit={createCliente} className={styles.cliente_form}>
            <h3 className={styles.cliente_form}>Dados do Cliente</h3>
            <Input
                handleOnChange={handleChangeName}
                type="text"
                text="Nome"
                name="nome"
                value={nome}
                placeholder="Insira o Nome"
            />

            <Input
                handleOnChange={handleChangeSobrenome}
                type="text"
                text="Sobrenome"
                name="sobrenome"
                value={sobrenome}
                placeholder="Insira o Sobrenome"
            />

            <Input
                handleOnChange={handleChangeCpf}
                type="text"
                text="CPF"
                name="cpf"
                value={cpf}
                placeholder="Insira o CPF"
            />

            <h3 className={styles.cliente_form}>Endereço do Cliente</h3>
            <Input
                handleOnChange={handleChangeRua}
                type="text"
                text="Rua"
                name="rua"
                value={rua}
                placeholder="Insira a Rua"
            />
            
            <Input
                handleOnChange={handleChangeNumero}
                type="text"
                text="Número"
                name="numero"
                value={numero}
                placeholder="Insira o Número"
            />

            <Input
                handleOnChange={handleChangeComplemento}
                type="text"
                text="Complemento"
                name="complemento"
                value={complemento}
                placeholder="Insira o Complemento"
            />

            <Input
                handleOnChange={handleChangeCep}
                type="text"
                text="CEP"
                name="cep"
                value={cep}
                placeholder="Insira o CEP"
            />

            <Input
                handleOnChange={handleChangeCidade}
                type="text"
                text="Cidade"
                name="cidade"
                value={cidade}
                placeholder="Insira a Cidade"
            />
            <SubmitButton text={"Cadastrar cliente"}/>
        </form>
    )
}