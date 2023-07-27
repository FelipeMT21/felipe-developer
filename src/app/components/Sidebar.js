import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar({ favicon }) {
    return (
        <div className={styles.header}>
                <Link href="/">
                    <div className={styles.logo_header}>
                        <Image src={favicon} width={52} height={52} alt="favicon.ico" />
                        <h2>João Felipe</h2>
                    </div>
                </Link>
                <div className={styles.navigation_header}>
                    <Link href="#home" className={styles.home}>HOME</Link>
                    <Link href="#about" className={styles.others}>ABOUT ME</Link>
                    <Link href="#portfolio" className={styles.others}>PORTIFOLIO</Link>
                    <Link href="#experience" className={styles.others}>EXPERIENCE</Link>
                    {/* <button className={styles.contact_me}>CONTACT ME</button> */}
                </div>
                {/* <div className={styles.menu}>
                    <button className={styles.button_menu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" class="css-1170n61">
                    <rect x="1" y="5" width="14" height="1.5" rx="1" fill="#007FFF"></rect>
                    <rect x="1" y="9" width="14" height="1.5" rx="1" fill="#007FFF"></rect></svg>
                    </button>
                </div> */}
            </div>
    )
}