"use client"

import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import PrevProjects from "./PrevProjects";

export default function Portfolio({ projects, hidden, headTitle }) {
    return (
        <section id="portfolio">
            <div className={styles.container_portfolio + " container"}>
                <h2 className="titles_navigation">{headTitle}</h2>
                {projects.map((value, index) => {
                    return (
                            <PrevProjects
                                key={index}
                                id={index}
                                srcImage={value.path}
                                title={value.title}
                                content={value.description}
                                flexDirection={value.flexDirection}
                                link={value.link}
                                github={value.github}
                            />
                    )
                })}
                <Link href="/projects" ><button className={styles.button_projects} style={{ display: hidden }}>View All</button></Link>
            </div>
        </section>
    )
}