import styles from "./Card.module.css";

import CardButton from "./CardButton";

export default function({h1Text, pathCreate, pathList}: {h1Text: string, pathCreate: string, pathList: string}){
    return (
        <div className={styles.box}>
            <h1>{h1Text}</h1>
            <CardButton buttonMsg={"Cadastrar"} path={pathCreate}></CardButton>
            <CardButton buttonMsg={"Listar"} path={pathList}></CardButton>
        </div>
    )
}