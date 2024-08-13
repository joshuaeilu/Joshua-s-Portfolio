"use client"
import { useState } from "react";
import {projectTypes } from "@/lib/data";
import {projects} from "@/lib/data";
import { Accordion, AccordionItem, AccordionTrigger, AccordionChevron, AccordionContent } from "@/components/ui/accordion";
import CardProject from "@/components/ui/cardproject";
import Link from "next/link"

export default function Projects() {

  const projectOne = projects["Web Development"].examples[0];
  const [projectInfo, setProjectInfo] = useState({
    title: projectOne.title,
    description: projectOne.description,
    image: projectOne.image,
    technologies: projectOne.technologies,
    github: projectOne.github,
    demo: projectOne.demo
  });

  const [projectclassname, setProjectClassname] = useState("w-full max-w-xl  p-5 grid gap-6 hidden md:block");
  function changeProject(proj){
    setProjectInfo(proj);
  if (window.innerWidth < 768) {
    setProjectClassname("w-full p-5 h-screen gap-6 block fixed top-0 left-0 z-2000 bg-white md:block");

    // Disable scrolling
    document.body.style.overflow = 'hidden'; 
    // Get the menubar element by its id
    const menubar = document.getElementById("menubar");

    // Hide the menubar
    menubar.style.display = "none";
  }
  }
  


  return (

  <div id="Projects"  className="flex justify-center items-center h-screen md:gap-36 bg-sky-900">
    
    {/** Projects Accordion */}
    <div className=" flex flex-col justify-around w-full mx-5 md:mx-0 md:w-1/5 md:h-2/5">
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
    <CardProject projectTitle = {projectInfo.title} projectDescription = {projectInfo.description} projectImage = {projectInfo.image} projectTechnologies= {projectInfo.technologies} projectGithub = {projectInfo.github} projectDemo = {projectInfo.demo} class={projectclassname} setClass={setProjectClassname}  />
   
  </div>


    
  )
}

