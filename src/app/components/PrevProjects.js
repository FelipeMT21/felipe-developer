import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PrevProjects({ srcImage, title, content, flexDirection, link, github }) {

    const projectStyles = {
        flexDirection: flexDirection,
    };

    return (
        <div className={styles.projects} style={projectStyles}>
            <Link href={link} target="_blank">
                <div className={styles.box}>
                    <Image className={styles.project_image} src={srcImage} alt={title + ".img"} />
                </div>
            </Link>
            <div className={styles.project_description}>
                <h3><span>{title}</span></h3>
                <p>{content} <a href={github} target="_blank">{title}</a>.</p>
            </div>
        </div>
    )
}