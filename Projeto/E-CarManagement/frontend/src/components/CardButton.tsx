import styles from "./form/SubmitButton.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function({buttonMsg, path}: {buttonMsg: string, path: string}){
    let navigate = useNavigate();
    
    const routeChange = () =>{
        navigate(path);
    }

    return (
        <button onClick={routeChange} className={styles.btn}>
            <Link to={path}>{buttonMsg}</Link>
        </button>
    )
}

