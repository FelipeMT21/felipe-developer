"use client"

import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsApp() {
    return (
        <section id="whatsapp">
            <a href="https://api.whatsapp.com/send?phone=5585991042325&text=Olá!%20Encontrei%20seu%20site%20na%20Internet%20e%20preciso%20de%20seus%20serviços."
                className="whatsapp" target="_blank"
                onclick="goog_report_conversion('https://api.whatsapp.com/send?phone=5585991042325&text=Olá!%20Entrei%20em%20seu%20site%20e%20preciso%20de%20seus%20serviços.')">
                <WhatsAppIcon className="icon_whatsapp" sx={{ fontSize: 40 }} />
            </a>
        </section>
    )
}

