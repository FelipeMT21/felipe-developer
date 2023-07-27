import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact">
            <div className={styles.contact+ " container"}>
                <h2 className="titles_navigation">CONTACT</h2>
                <div className={styles.container_contact}>
                    <div className={styles.box_contact}>
                        <input type="text" placeholder="Name"></input>
                        <input type="email" placeholder="Email"></input>
                        <textarea placeholder="Message" rows="5"></textarea>
                        <div className={styles.button_contact}>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}