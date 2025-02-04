import styles from "../../styles/Card.module.css"
import { Link }from "react-router-dom";

function Card ({title, image, id}) {
  return (
    <Link to={`/accommodation/${id}`} >
        <div className={styles.card}>
          <img src={image} alt={title} />
          <h2>{title}</h2>
        </div>
    </Link>
  );
};

export default Card;

