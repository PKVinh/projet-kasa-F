import Banner from "../../components/Banner"
import bannerAbout from "../../styles/assets/about-banner.png"
import Collapse  from "../../components/Collapse"
import styles from "./about.module.css"


function About() {
    return (
        <main>
            <section>
                <Banner image={bannerAbout}/>
            </section>

            <section className={styles.collapseContainer}>
                <Collapse title="Fiabilité">
                    <p>
                    Les annonces postées sur Kasa garantissent une 
                    fiabilité totale. 
                    Les photos sont conformes aux logements, 
                    et toutes les informations sont régulièrement 
                    vérifié par nos équipes. 
                    </p>
                </Collapse>

                <Collapse title="Respect">
                    <p>
                    La bienveillance fait partie des valeurs fondatrices 
                    de Kasa. Tout comportement discriminatoire ou de perturbation
                    du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Collapse>

                <Collapse title="Service">
                    <p>
                    La qualité du service est au coeur de notre engagement 
                    chez Kasa. Nous veillons à ce que chaque interaction, 
                    que ce soit nos hôtes ou nos locataires, soit emprient de respect 
                    et de bienveillance.
                    </p>
                </Collapse>

                <Collapse title="Sécurité">
                    <p>
                    La sécurité est la priorité de Kasa. Aussi pour 
                    nos hôtes que pour les voyageurs, chaque logement 
                    correspond aux critères de sécurité établis par nos 
                    services. En laissant une note aussi bien à l'hôte 
                    qu'au locataire, cela permet à nos équipes de vérifier 
                    que les standards sont bien respectés. Nous organisons 
                    également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Collapse>
            </section>
        </main>
    );
}

export default About;