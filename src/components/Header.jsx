import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleScrollToAbout = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const targetScrollPosition = section.offsetTop - 100;
            window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex w-full md:justify-around h-[80px] items-center justify-center md:gap-0 gap-[70vw] fixed top-0 bg-[#16161a] z-10">
            <div>©/2024</div>
            <div className="md:flex md:gap-3 lg:gap-8 gap-2 hidden">
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('about');
                    }}
                >
                    About
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('skills');
                    }}
                >
                    Skills
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('services');
                    }}
                >
                    Services
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('projects');
                    }}
                >
                    Projects
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('timeline');
                    }}
                >
                    Timeline
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('testi');
                    }}
                >
                    Testimonial
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('contact');
                    }}
                >
                    Contact
                </span>
            </div>
            <motion.div className="md:hidden block" onClick={toggleDrawer}>
                <GiHamburgerMenu />
            </motion.div>

            <motion.div
                className="md:hidden text-center bg-[#16161a] flex flex-col gap-[20px] z-[10]"
                animate={
                    isDrawerOpen == true
                        ? {
                              position: 'absolute',
                              top: 0,
                              left: '50vw',
                              width: '50%',
                              height: '100vh',
                          }
                        : {
                              position: 'absolute',
                              top: 0,
                              left: '100vw',
                              width: '50%',
                              height: '100vh',
                          }
                }
                transition={{ duration: 0.5 }}
            >
                <span className="self-end mt-2 mr-2 border-2 border-white" onClick={toggleDrawer}>
                    <IoMdClose />
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('about');
                    }}
                >
                    About
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('skills');
                    }}
                >
                    Skills
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('services');
                    }}
                >
                    Services
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('projects');
                    }}
                >
                    Projects
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('timeline');
                    }}
                >
                    Timeline
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('testi');
                    }}
                >
                    Testimonial
                </span>
                <span
                    className="hover:line-through"
                    onClick={() => {
                        handleScrollToAbout('contact');
                    }}
                >
                    Contact
                </span>
            </motion.div>
        </div>
    );
}

export default Header;
