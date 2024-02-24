import styles from "./Card.module.css"
import ButtonFade from "./ButtonFade.jsx"

function Card({img, title, description, deploy, repository}){
    return(
       <div className={styles.card}>
            <section>
                <a href={deploy}><img src ={img} alt="Erro"/></a>
                <h3>{title}</h3>
                <p>{description}</p>
                <ButtonFade text = "Acesse o Repositório" link={repository}/>
            </section>
       </div> 
    )
}
export default Card