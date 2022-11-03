import styles from "./form/SubmitButton.module.css";
import { Link, Outlet } from "react-router-dom";

export default function({buttonMsg, path}: {buttonMsg: string, path: string}){
    return (
        <button className={styles.btn}>
            <Link to={path}>{buttonMsg}</Link>
            <Outlet/>
        </button>
    )
}

