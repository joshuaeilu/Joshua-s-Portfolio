import React from 'react';
import Image from 'next/image';
import {Card, CardContent,CardDescription, CardTitle, CardFooter} from '@/components/ui/card';
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';
export default function About(){
  
    return (
        <div id="About" style={{height: "100svh"}} className='flex w-full md:gap-24 justify-center p-3 bg-sky-900 items-center'>
            {/** Profile Image */}
            
                            <div style={{backgroundImage:"url('/josh_img.jpg')", backgroundSize:'cover', backgroundPosition:"center"}} className=' hidden md:block flex h-3/5 w-1/5 rounded-xl shadow-lg '>
                            </div>

            {/** Profile Description */}
               <Card className="flex flex-row px-3 py-5 w-full md:h-3/5 md:w-3/5 md:px-5 md:py-3">
                <div style={{backgroundImage:"url('code_icon.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} className='hidden md:block items-center p-3 h-24  w-24'>
                </div>
                <CardContent className="flex flex-col justify-around">
                    <div >
                    <CardTitle className="flex items-center text-5xl">Software Engineer</CardTitle>
                    <CardTitle className="flex items-center pb-3 pt-3 text-sky-700  text-3xl">Joshua Eilu</CardTitle></div>

                    <CardDescription className=" text-lg flex-grow leading-relaxed ">Hello! I'm Joshua Eilu, a sophomore  computer science student passionate about software development and computing. I thrive on creating innovative applications and solving complex problems, always aiming to make a positive impact. Welcome to my portfolio, showcasing my journey and projects in the world of technology.</CardDescription>
                   
                    <Separator className='mt-5'/>
        <div style={{width:'100%'}} className="flex mt-5 justify-around md:gap-4">
          <Link href="#" className="inline-flex items-center gap-2 text-primary  hover:underline" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
            Resume
          </Link>
          <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
          </svg>
            GitHub
          </Link>
          <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
                      LinkedIn
          </Link>
        </div>

                </CardContent>
                </Card>
               </div>
    )
  
      
      
  
 
      
}