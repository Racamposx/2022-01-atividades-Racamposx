import styles from "./ErrorPage.module.css";

export default function(){
    return(
        <div className={styles.container_error}>
            <h1>Error 404</h1>
            <p>Cannot reach the specified path - Rota inválida</p>

        </div>
    )
}