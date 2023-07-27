"use client";

import Header from "@/app/components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import WhatsApp from "./components/WhatsApp";
import Zoom from '@mui/material/Zoom';
import projects from "./components/projects";

import Teste from "@/app/components/Teste";

export default function Home() {

  return (
    <div>
      <Header />
      <Zoom in="true"><hr /></Zoom>
      <About />
      <Zoom in="true"><hr /></Zoom>
      <Portfolio projects={projects} headTitle="PORTIFOLIO" />
      <Zoom in="true"><hr /></Zoom>
      <Experience />
    </div>
  )
}
