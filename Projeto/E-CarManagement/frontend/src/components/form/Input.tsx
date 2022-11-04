import styles from "./Form.module.css";

export default function({type, text, name, placeholder, handleOnChange, value }:
    {type: string, text: string, name: string, placeholder: string, handleOnChange?: any, value?: string}){
    return (
        <div>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} onChange={handleOnChange} value={value} placeholder={placeholder}/>
        </div>
    )
}