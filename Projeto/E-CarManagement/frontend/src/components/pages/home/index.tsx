import styles from "./Home.module.css";
import gear from "../../../img/gear_home.svg";

export default function(){
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>E-Car Management</span></h1>
            <h3>Gerencie seu negócio agora mesmo!</h3>
            <img className={styles.home_img} src={gear} alt="gear logo"/>
        </section>
    )
}