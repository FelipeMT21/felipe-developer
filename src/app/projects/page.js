"use client"

import Portfolio from "@/app/components/Portfolio";
import {allProjects} from "@/app/components/projects";

export default function Projects() {

    return (
        <main>
            <Portfolio projects={allProjects} hidden="none" headTitle="PROJECTS" />
        </main>
    )
}
