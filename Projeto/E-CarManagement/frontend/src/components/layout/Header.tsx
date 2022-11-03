import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header(){
    return (
        <header className={styles.header}>
            <div>
                <nav>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/cliente'>Clientes</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/agendamento'>Agendamentos</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/carro">Carros</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/manutencao">Manutenções</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
