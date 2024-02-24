import styles from "./AboutMe.module.css"
import React, {useState} from "react"
import TimeLine from "../Elements/Timeline";
import "../../App.css";

function AboutMe(){

    return(
        <div className={styles.aboutMe}>
            <h1>Sobre mim</h1>
            <TimeLine/>
        </div>
    )
}
export default AboutMe