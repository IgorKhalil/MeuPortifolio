import styles from "./Presentation.module.css"
import ButtonFade from "../Elements/ButtonFade.jsx"
import {useState, useEffect} from "react"

function Presentation({title, description, repository}){

    const [text, setText] = useState('');
    const toRotate = ["Igor Khalil !!", 'Desenvolvedor Front End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const[delta, setDelta] = useState(100)


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        },delta)
        return ()=>{clearInterval(ticker)}
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updateText);

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === ""){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div id="Presentation" className={styles.presentation}>
            <h4><strong>Bem vindo ao meu portifólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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
export default Presentation