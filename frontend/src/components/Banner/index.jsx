import banner from "../../styles/assets/home_banner.png"
import styles from "../../styles/Banner.module.css"

function Banner() {
    return (
      <section className={styles.banner_container}>
        <img src={banner} alt="home-banner"></img>
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
    )
  }
  
export default Banner