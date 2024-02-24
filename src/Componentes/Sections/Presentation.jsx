import styles from "./Presentation.module.css"
import ButtonFade from "../Elements/ButtonFade.jsx"

function Apresentation({title, description, repository}){
    return(
        <div id="Presentation" className={styles.presentation}>
            <h4><strong>Bem vindo ao meu portifólio</strong></h4>
            <h1>Olá, eu sou o Igor Khalil</h1>
            <p> 
                Sou técnico em Eletrônica e em Engenharia Clínica e atualmente estou fazendo minha graduação 
                <br/>em Ciências da Computação pela UFMA. Minhas experiências no mercado de trabalho me permitiram 
                <br/>absolver muitas habilidades como, trabalho em grupo, proatividade, busca de conhecimento,capacidade 
                <br/>de resolução de problemas etc... as quais utilizo constantemente no meu desenvolvimento pessoal.
                <br/>Gosto muito de aprender coisas novas e me divirto com desafios.
            </p>
            <ButtonFade text ="Repositório" link="https://github.com/IgorKhalil" />
        </div>
    )
}
export default Apresentation