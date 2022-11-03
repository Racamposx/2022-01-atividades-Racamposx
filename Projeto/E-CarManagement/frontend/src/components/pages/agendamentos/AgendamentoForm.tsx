import styles from "./ClienteFormEdit.css";
import Input from "../../form/Input";
import SubmitButton from "../../form/SubmitButton";

export default function(){
    return (
        <form>
            <h3>Dados do Cliente</h3>
            <Input
                type="text"
                text="Nome"
                name="nome"
                placeholder="Insira o Nome"
            />

            <Input
                type="text"
                text="Sobrenome"
                name="sobrenome"
                placeholder="Insira o Sobrenome"
            />

            <Input
                type="text"
                text="CPF"
                name="cpf"
                placeholder="Insira o CPF"
            />

            <h3>Endereço do Cliente</h3>
            <Input
                type="text"
                text="Rua"
                name="rua"
                placeholder="Insira a Rua"
            />
            
            <Input
                type="text"
                text="Número"
                name="numero"
                placeholder="Insira o Número"
            />

            <Input
                type="text"
                text="Complemento"
                name="complemento"
                placeholder="Insira o Complemento"
            />

            <Input
                type="text"
                text="CEP"
                name="cep"
                placeholder="Insira o CEP"
            />

            <Input
                type="text"
                text="Cidade"
                name="cidade"
                placeholder="Insira a Cidade"
            />
            <SubmitButton text={"Cadastrar cliente"}/>
        </form>
    )
}