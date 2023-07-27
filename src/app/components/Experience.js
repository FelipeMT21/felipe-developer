import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import icons from "@/app/components/icons";
import { useState } from "react";


export default function Experience() {
    return (
        <section id="experience">
            <div className={styles.container_experience + " container"}>
                <h2 className="titles_navigation">EXPERIENCE</h2>
                <div className={styles.experience}>
                    {icons.map((value, index) => {
                        return (
                            <div key={index}>
                                <Image
                                    className={styles.icon_experience}
                                    src={value.path}
                                    style={{ backgroundImage: value.color }}
                                    alt={value.title + ".img"}
                                />
                                <h3>{value.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}