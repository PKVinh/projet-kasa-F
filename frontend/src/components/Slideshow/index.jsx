import { useState } from "react";
import styles from "../../styles/Slideshow.module.css"

function Slideshow({pictures}) {

  const [index, setIndex] = useState(0)

  const previousSlide = () => {
    setIndex((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1)
  }

  const nextSlide = () => {
    setIndex((nextIndex) => nextIndex === pictures.length - 1 ? 0 : nextIndex + 1)
  }


  return (
    <div className={styles.slideshow}>
      <i className={`fa-solid fa-chevron-left ${styles.chevron} ${styles.chevronLeft}`} onClick={previousSlide}> </i>
      <img src={pictures[index]} 
      alt={`Slide ${index + 1}`}
      className={styles.slideshowImage}/>
      <span className={styles.indexText}>{index + 1} / {pictures.length}</span>
      <i className={`fa-solid fa-chevron-right ${styles.chevron} ${styles.chevronRight}`} onClick={nextSlide}> </i>
    </div>
  );
};


export default Slideshow;
