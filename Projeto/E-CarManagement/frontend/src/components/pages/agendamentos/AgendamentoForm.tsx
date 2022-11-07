import styles from "./AgendamentoForm.module.css";
import Input from "../../form/Input";
import SubmitButton from "../../form/SubmitButton";

export default function () {
    return (
        <form className={styles.agendamento_form}>
            <h3>Dados do Agendamento</h3>
            <Input
                type="date"
                text="data"
                name="data"
                placeholder="informe a data"
            />

            <label htmlFor="">Selecione o dono do veículo</label>
            <select name="cliente_id" >
                <option value="">Selecione uma opção</option>
            </select>

            <div>
                <label htmlFor="">Selecione o veículo</label>
                <select name="cliente_id" >
                    <option value="">Selecione uma opção</option>
                </select>
            </div>
            <SubmitButton text={"Cadastrar cliente"} />
        </form>
    )
}