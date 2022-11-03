import styles from './SubmitButton.css';

export default function({ text }:
    {text: string}){
    return(
        <div>
            <button>{text}</button>
        </div>
    )
}