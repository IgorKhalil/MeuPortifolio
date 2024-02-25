import styles from "./Card.module.css"
import ButtonFade from "./ButtonFade.jsx"
import { useState } from "react"

function Card({img, title, description, deploy, repository}){
    
    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }
    function InfoOff(){
        setInfo(false)
    }
    
    
    
    return(
       <div onMouseLeave={InfoOff} onMouseEnter={InfoOn}className={styles.card}>
            
            <section>
                <a  href={deploy}>
                    <img src ={img} alt="Erro"/>
                </a>
                <h3>{title}</h3>
                {info === true &&(
                    <>
                    <p>{description}</p>
                    <ButtonFade text = "Acesse o Repositório" link={repository}/>
                    </>
                )}
            </section>
            
       </div> 
    )
}
export default Card