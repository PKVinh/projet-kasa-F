import styles from "../../styles/Banner.module.css"

function Banner({image, title}) {
    return (
      <section className={styles.banner_container}>
        <img src={image} alt="home-banner"></img>
        {title && <h1>{title}</h1>}
      </section>
    )
  }
  
export default Banner