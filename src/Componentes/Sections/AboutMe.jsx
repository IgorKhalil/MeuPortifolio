import styles from "./AboutMe.module.css"
import React, {useState} from "react"
import Timeline from "../Elements/Timeline.jsx"
import "../../App.css";


function AboutMe(){

    return(
        <div id="AboutMe" className={styles.aboutMe}>
            <h1>Sobre mim</h1>
            <section>
                <Timeline/>
            </section>
        </div>
    )
}
export default AboutMe