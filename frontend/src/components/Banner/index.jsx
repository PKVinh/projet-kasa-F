import styles from "./Banner.module.css"

function Banner({image, title}) {
    return (
      <section className={title ? styles.banner_container_home : styles.banner_container_about}>
        <img src={image} alt="home-banner"></img>
        {title && <h1>{title}</h1>}
      </section>
    )
  }
  
export default Banner