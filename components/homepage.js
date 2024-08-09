"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Particles from './ui/particles';
import { Menubar, MenubarMenu, MenubarTrigger } from './ui/menubar.jsx';
import { navElements } from '@/lib/data';

import About from './about';
import Skills from './skills';
import Contacts from './contact';
import Testimonials from './testimonials';
import Projects from './projects';
import Link from 'next/link';
export default function HomePage() {
    const menubarRef = useRef(null);
    const sectionRefs = useRef([]);
    const [activeSection, setActiveSection] = useState('');

    const sectionMap = [ About, Projects, Skills,  Testimonials, Contacts]
    
    useEffect(() => {
        const handleScroll = () => {
            if (menubarRef.current) {
                if (window.scrollY > menubarRef.current.offsetTop) {
                    menubarRef.current.classList.add('fixed-top');
                } else {
                    menubarRef.current.classList.remove('fixed-top');
                }
                if(window.scrollY === 0){
                    setActiveSection('');
                }
            }
            const scrollPosition = window.scrollY;
            sectionRefs.current.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(navElements[index]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <main>
            <div id="Home" className="bg-sky-900">
                {/* Particles animation */}
                <Particles className="absolute inset-0 pointer-events-none" />

                {/* Center Image */}
                <div style={{ height: '100svh' }} className="flex justify-around flex-col">
                    <div className="flex justify-center h-full items-center">
                        <div
                            style={{
                                backgroundImage: "url('josh_img.jpg')",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                border: '0.5rem white solid',
                            }}
                            className="h-80 w-80 md:h-96 md:w-96 rounded-full shadow-lg p-3 "
                        ></div>
                    </div>

                    <div id='menubar' className={`${activeSection === '' ? 'hidden': ''} flex items-center justify-center m-5`}>
                   
                        <ul ref={menubarRef} className='bg-white flex text-lg rounded-lg p-2'>
                            {navElements.map((element, index) => (
                                <li className={`${activeSection !== element ? 'hidden' : ''} md:block`}>
                                    <a
                                        href={`#${element}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(element);
                                        }}
                                        style={{padding:'1rem'}}
                                        className={activeSection === element ? 'bg-sky-600 text-white ' : ''}
                                    >
                                        {element}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Sections for the page */}
            {sectionMap.map((element, index) => {
                const Component = element;
return (
                    <section
                            key={index}
                            id={element}
                            ref={(el) => sectionRefs.current[index] = el}
                        >
                            <Component />
                        </section>
                )
            })}
        </main>
    );
}
