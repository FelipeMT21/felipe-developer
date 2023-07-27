"use client"

import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import favicon from "@/app/favicon.ico"
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <section id="footer">
            <div className="footer container">
                <div className="copyright">
                    <Image src={favicon} width={42} height={42} alt="favicon.ico" />
                    <p>Copyright © 2023 João Felipe.</p>
                </div>
                <div>
                    <Link href="https://github.com/FelipeMT21" target="_blank" className={"icon_social " + styles.links} ><GitHubIcon sx={{ fontSize: 30 }} /></Link>
                    <Link href="https://www.linkedin.com/in/jo%C3%A3o-felipe-1028aa210/" target="_blank" className={"icon_social " + styles.links} ><LinkedInIcon sx={{ fontSize: 30 }} /></Link>
                    {/* <Link href="https://github.com/FelipeMT21" className={"icon_social " + styles.links} ><InstagramIcon sx={{ fontSize: 30 }} /></Link> */}
                </div>
            </div>
        </section>
    )
}