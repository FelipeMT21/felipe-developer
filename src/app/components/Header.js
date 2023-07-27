"use client"

import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { breeSerif } from "../fonts";

export default function Header() {
    return (
        <section id="home">
            <header>
                <div className={styles.heros}>
                    <div className={styles.content_title + " " + breeSerif.className}>
                        <h2 className={styles.subtitle}>I {"'"} m a</h2>
                        <h1 className={styles.title}>FULL STACK SOFTWARE DEVELOPER</h1>
                        <Link href="#portfolio" className={styles.others}><button className={styles.button_home}>Projects</button></Link>
                    </div>
                </div>
            </header>
        </section>
    )
}