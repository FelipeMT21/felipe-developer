import './globals.css'
import { openSans } from "@/app/fonts";
import Sidebar from "@/app/components/Sidebar";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>João Felipe</title>
      </head>
      <body>
      <Sidebar favicon="/favicon.ico" />
      <WhatsApp />
      {children}
      <Footer />
      </body>
    </html>
  )
}
