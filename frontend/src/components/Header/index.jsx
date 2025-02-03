import { Link } from 'react-router-dom' 
import styles from "../../styles/Header.module.css"
import logo from "../../styles/assets/LOGO-main.png"

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="kasa-logo"></img>
            <nav>
                <Link to="/" className={styles.link}>Accueil</Link>
                <Link to="/about" className={styles.link}>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header