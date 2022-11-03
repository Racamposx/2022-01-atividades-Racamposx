import { Link } from "react-router-dom";
import {SiLinkedin, SiGithub, SiYoutube} from "react-icons/si"
import styles from "./Footer.module.css";

export default function Header(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.linkedin.com/in/rafael-nepomuceno-siqueira/">
                        <SiLinkedin></SiLinkedin>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/racamposx">
                        <SiGithub></SiGithub>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCJo4Ds9KDHHkeNWle7Q0XFQ">
                        <SiYoutube></SiYoutube>
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}><span>E-Carfix management</span> &copy; 2022</p>
    </footer>
    )
}
