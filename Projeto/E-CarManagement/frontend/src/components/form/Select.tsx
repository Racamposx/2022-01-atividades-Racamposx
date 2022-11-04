
export default function({text, name, options, handleOnChange, value}:
    {text: string, name: string, options: string, handleOnChange?: string, value: string}){
        return(
            <div>
                <label htmlFor={name}>{text}:</label>
                <select name={name} id={name}>
                    <option>Selecione uma opção</option>
                </select>
            </div>
        )
}   