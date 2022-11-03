import styles from "./Form.module.css";

export default function({type, text, name, placeholder, handleOnChange, value }:
    {type: string, text: string, name: string, placeholder: string, handleOnChange?: string, value?: string}){
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} placeholder={placeholder}/>
        </div>
    )
}