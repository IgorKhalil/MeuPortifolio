import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className ={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Tecnology'>Tecnologias</Nav.Link></li>
                <li><Nav.Link href='#AboutMe'>Sobre mim</Nav.Link></li>
            </ul>
            <ul>
                <li> <a href='https://github.com/IgorKhalil'><FaGithub size={30} /> </a></li>
                <li> <a href='https://www.linkedin.com/in/igor-silva-a97316279/'><FaLinkedin size={30} /> </a></li>
            </ul>
        </div>
    )
}

export default Navbar
