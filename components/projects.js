"use client"
import { useState } from "react";
import {projectTypes } from "@/lib/data";
import {projects} from "@/lib/data";
import { Accordion, AccordionItem, AccordionTrigger, AccordionChevron, AccordionContent } from "@/components/ui/accordion";
import CardProject from "@/components/ui/cardproject";
import Link from "next/link"

export default function Projects() {

  const [projectInfo, setProjectInfo] = useState({
    title: "Personal Portfolio",
    description: "A personal portfolio website to showcase my projects and skills.",
    image: "path/to/portfolio-image.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/username/portfolio",
    demo: "https://username.github.io/portfolio"
  });

  function changeProject(proj){
    setProjectInfo(proj);
  }
  


  return (

  <div id="Projects" style={{height: "100svh"}} className="flex justify-center items-center gap-36 bg-sky-900">
    
    {/** Projects Accordion */}
    <div className=" flex flex-col justify-around w-1/5 h-2/5">
    {
          projectTypes.map((projectType, projectIndex) => (
            <Accordion key={projectIndex} type="single" collapsible className=" bg-white rounded-t-lg px-2 my-2">
            <AccordionItem value="web-apps">
              <AccordionTrigger className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {projects[projectType].svg}
                  <h3 className="text-lg font-semibold">{projectType}</h3>
                </div>
                <div className="transition-transform" />
              </AccordionTrigger>
              {
                projects[projectType].examples.map((project, index) => (
                    <AccordionContent key={index} className="p-4 bg-white ">
                    <div className="flex items-center space-x-4">
                        <h4 key={index} className="text-lg font-semibold text-gray-800" onClick={() => changeProject(project)}>{project.title}</h4>
                    </div>
                  </AccordionContent>
                  
              ))
              }
            </AccordionItem>
            
          </Accordion>
        ))  
    
    }
    </div>

    {/** Project Info*/}
    <CardProject projectTitle = {projectInfo.title} projectDescription = {projectInfo.description} projectImage = {projectInfo.image} projectTechnologies= {projectInfo.technologies} projectGithub = {projectInfo.github} projectDemo = {projectInfo.demo} />
   
  </div>


    
  )
}

