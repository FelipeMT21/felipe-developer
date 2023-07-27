"use client";

import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { openSans, breeSerif } from "../fonts";
import perfil from "../../../public/images/perfil.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function About() {
    return (
        <section id="about">
            <div className={styles.about}>
                <div className={styles.container_about+ " container"}>
                    <h2 className="titles_navigation">ABOUT ME</h2>
                    <div className={styles.description}>
                        <Image src={perfil} alt="joão-foto" className={styles.perfil} />
                        <div>
                            <h3>My name is <span>João Felipe</span></h3>
                            <p>Sou aluno do terceiro semestre do curso de Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul. Tenho habilidades de comunicação, ética e criatividade, além de ser flexível e capaz de enfrentar novos desafios com entusiasmo. Ao longo dos meus projetos e atividades no curso, adquiri experiência em programação web full stack, utilizando diversas tecnologias, como: Object-Oriented Java, Database SQL, NoSQL, MongoDB, HTML, CSS, Bootstrap, JavaScript, DOM, JQuery, Node.js, Express.js, APIs, EJS, JSON, Git e Github. Estou sempre buscando aprimorar meus conhecimentos e expandir minhas habilidades para contribuir de forma significativa em projetos e equipes de desenvolvimento.</p>
                            <div className={styles.pessoal}>
                                <p><span>Country</span> - Brasil</p>
                                <p><span>Email</span> - joaosuporte21@gmail.com</p>
                            </div>
                            <div className={styles.social}>
                                <Link href="https://github.com/FelipeMT21" target="_blank" className={styles.links} ><GitHubIcon sx={{ fontSize: 40 }} /></Link>
                                <Link href="https://www.linkedin.com/in/jo%C3%A3o-felipe-1028aa210/" target="_blank" className={styles.links} ><LinkedInIcon sx={{ fontSize: 40 }} /></Link>
                                {/* <Link href="https://github.com/FelipeMT21" className={styles.links} ><InstagramIcon sx={{ fontSize: 40 }} /></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}