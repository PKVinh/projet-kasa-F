import styles from "./Footer.module.css"
import logo from "../../styles/assets/LOGO-main-white.png"

function Footer() {
    return (
        <footer className={styles.footer_container}>
            <img src={logo} alt="kasa-logo-white" className={styles.img}></img>    
            <p className={styles.p}>2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer 