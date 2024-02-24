import styles from "./Tecnology.module.css"
import ButtonFade from "../Elements/ButtonFade"
import javascript from "../../Imagens/Tecnology/javascript.svg"
import html from "../../Imagens/Tecnology/html.svg"
import css from "../../Imagens/Tecnology/css.svg"
import python from "../../Imagens/Tecnology/python.svg"
import react from "../../Imagens/Tecnology/react.svg"

function Tecnology({title, description, repository}){
    return(
        <div id ="Tecnology" className={styles.tecnology}>
            <h1> Tecnologias </h1>
            <p> Conheça um pouco das minhas principais Habilidades.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={python}/>
                <img src={react}/>
            </div> 
        </div>
    )
}
export default Tecnology