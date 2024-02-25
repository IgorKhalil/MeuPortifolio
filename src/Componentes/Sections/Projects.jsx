import styles from "./Projects.module.css"
import Card from "../Elements/Card.jsx"
import LpArqui from "../../Imagens/Projects/LandingArqui.svg"
import Portifolio1 from "../../Imagens/Projects/Portifolio1.svg"
import LpDNC from "../../Imagens/Projects/LandingPage.svg"
import Portifolio2 from "../../Imagens/Projects/Portifolio2.svg"



function Projects(){
    return(
        <div id="Projects">
            <div className={styles.projects}>
                <h1>Projetos</h1>
                <sectioncard>
                    <Card 
                    img = {LpDNC}
                    title = "Projeto Landingpage-DNC"
                    description = "Meu primeiro projeto de landing page."
                    deploy = "https://projeto-landing-page-one.vercel.app"
                    repository = "https://github.com/IgorKhalil/Projeto-LandingPage"
                    />
                    <Card 
                    img = {Portifolio1}
                    title = "Projeto Portifólio"
                    description = "Esse foi o projeto do meu primeiro portifólio."
                    deploy = "https://portifolio-delta-ecru.vercel.app"
                    repository = "https://github.com/IgorKhalil/Portifolio"
                    />
                    <Card 
                    img = {LpArqui}
                    title = "Projeto Landingpage-Arquitetura"
                    description = "Meu segundo projeto de landinpage de uma empresa de arquitetura."
                    deploy = "https://leadingpage-arquitetura.netlify.app/"
                    repository = "https://github.com/IgorKhalil/LeadingPage-Arquitetura"
                    />
                    <Card 
                    img = {Portifolio2}
                    title = "Projeto Portifolio 2"
                    description = "Esse é meu segundo projeto de portifólio."
                    deploy = "https://golden-longma-1f177c.netlify.app"
                    repository = "https://github.com/IgorKhalil/MeuPortifolio"
                    />
                </sectioncard>
            </div>
        </div>
    )
}
export default Projects