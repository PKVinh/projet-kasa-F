import { Link } from 'react-router-dom' 
import styles from "../../styles/Error404.module.css"
import error_banner from "../../styles/assets/404.png"

function Error404() {
    return (
        <div className={styles.error_container}>
            <img src={error_banner} alt="error-404"></img>
            <h2>Oups! La page que vous demandez n'existe pas </h2>
            <Link to="/" className={styles.link}>Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Error404