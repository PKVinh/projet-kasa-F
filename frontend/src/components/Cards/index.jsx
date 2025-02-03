import styles from "../../styles/Cards.module.css"

function Cards () {
  return (
    <div className={styles.cardsContainer}>
        <div className={styles.card} >
          <div className={styles.cardBackground}></div>
          <div className={styles.cardTitle}>Titre de la carte</div>
        </div>
    </div>
  );
};

export default Cards;

