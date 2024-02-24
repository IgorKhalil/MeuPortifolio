import styles from "./ButtonFade.module.css"

function ButtonFade({text, link}){
    return(
        <div>
            <a href={link}>
                <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}

export default ButtonFade