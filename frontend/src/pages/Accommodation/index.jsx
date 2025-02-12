import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from "../../components/Collapse"
import Slideshow from '../../components/Slideshow';
import Tag from "../../components/Tag";
import styles from "./Accomodation.module.css";


const Accommodation = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate(); // Permet la redirection
  const [accomodation, setAccomodation] = useState(null);
  const [error, setError] = useState(null);
  const [equipments, setEquipments] = useState([]);
  const [host, setHost] = useState([]);
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Fonction de validation d'ID
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/properties/${id}`);
        const result = await response.json();
        setAccomodation(result);
        setEquipments(result.equipments)
        setHost(result.host)
        setTags (result.tags)
        setRating(parseInt(result.rating, 10))

        if (!response.ok) {
          throw new Error('Hébergement introuvable');
        }

      } catch (error) {
        setError(error.message);
        // Redirige vers la page 404 en cas d'erreur
        navigate('/404', { replace: true });
      }
    };

    fetchData();
  }, [id, navigate]);

  // Si les données sont encore en cours de chargement
  if (!accomodation && !error) {
    return <h1>Chargement...</h1>;
  }

  const [firstName, lastName] = host.name.split(" ");

  // Si tout va bien, affiche les données
  return (
    <section className={styles.sectionAcommodation}>
      <Slideshow pictures={accomodation.pictures}/>

      <div className={styles.info}>
        <div className={styles.title}>
          <h2>{accomodation.title}</h2>
          <p>{accomodation.location}</p>
          
          <div className={styles.tags_container}>
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))} 
          </div>        
        </div>
        
        <div className={styles.host_container}>
          <div className={styles.host_info}>
              <div className={styles.host_name}>
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
            <img src={host.picture} alt={host.name}></img>
          </div>
          <div className={styles.ratingContainer}>
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fa-solid fa-star ${
                  index < rating ? styles.starred : styles.stargray
                }`}
              ></i>
            ))}
          </div>        
        </div>
      </div>

      <div className={styles.collpase_container}>
        <Collapse title="Description">
          <p>{accomodation.description}</p>
        </Collapse>

        <Collapse title="Equipements">
        <ul>
          {equipments.map((element, index) => (
          <li key={index}>{element}</li>
          ))}
        </ul>
        </Collapse>

      </div>

    </section>
  );
};

export default Accommodation;
