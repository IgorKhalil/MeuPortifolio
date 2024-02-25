import styles from "./AboutMe.module.css"
import React, {useState} from "react"
import Timeline from "../../Imagens/Timeline/timeline.svg";
import "../../App.css";

function AboutMe(){

    return(
        <div className={styles.aboutMe}>
            <h1>Sobre mim</h1>
            <img src={Timeline}/>
            <section>
                <p>Termino do meu ensino médio <br/>proficionalizante em<br/> Tec. em Eletrônica</p>
                <p>Inicio do meu processo<br/> de graduação em<br/> Ciência da Computação pela UFMA</p>
                <p>Previsão de termino da minha graduação</p>
            </section>
        </div>
    )
}
export default AboutMe