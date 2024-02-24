import styles from "./Projects.module.css"
import Card from "../Elements/Card.jsx"
import Project1 from "../../Imagens/Projects/Project1.svg"
import { Container } from "react-bootstrap"
function Projects(){
    return(
        <div id="Projects">
            <div className={styles.projects}>
                <h1>Projetos</h1>
                <sectioncard>
                    <Card 
                    img = {Project1}
                    title = "Projeto 1"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    deploy = "https://leadingpage-arquitetura.netlify.app/"
                    repository = "https://github.com/IgorKhalil/LeadingPage-Arquitetura"
                    />
                    <Card 
                    img = {Project1}
                    title = "Projeto 2"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    deploy = "https://leadingpage-arquitetura.netlify.app/"
                    repository = "https://github.com/IgorKhalil/LeadingPage-Arquitetura"
                    />
                    <Card 
                    img = {Project1}
                    title = "Projeto 3"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    deploy = "https://leadingpage-arquitetura.netlify.app/"
                    repository = "https://github.com/IgorKhalil/LeadingPage-Arquitetura"
                    />
                    <Card 
                    img = {Project1}
                    title = "Projeto 4"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    deploy = "https://leadingpage-arquitetura.netlify.app/"
                    repository = "https://github.com/IgorKhalil/LeadingPage-Arquitetura"
                    />
                </sectioncard>
            </div>
        </div>
    )
}
export default Projects