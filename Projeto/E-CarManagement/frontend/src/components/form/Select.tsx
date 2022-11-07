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
    endereco: endereco
}

type endereco = {
    id: number
    rua: String
    numero: String
    complemento: String
    cep: String
    cidade: String
}



export default function({text, name, options, handleOnChange, value}:
    {text: string, name: string, options: cliente, handleOnChange?: string, value?: string}){
        
        
        return(
            <div>
                <label htmlFor={name}>{text}:</label>
                <select name={name} id={name}>
                    <option>Selecione uma opção</option>
                    {options.map((option) => {
                        <option value={option.id}></option>
                    })}
                </select>
            </div>
        )
}   