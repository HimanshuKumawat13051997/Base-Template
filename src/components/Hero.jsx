import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion';
import { IoIosCloudDownload } from 'react-icons/io';
import Resume from '../components/Images/Resume.pdf';
function Hero({ props }) {
    const downloadResume = () => {
        const resumeUrl = Resume;
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="py-5 mt-[100px]" id="hero">
            <div className="w-full gap-3 sm:gap-0 flex sm:flex-row flex-col-reverse justify-center sm:items-start sm:justify-around items-center">
                <div className="w-[300px] md:w-[350px] lg:w-[400px] self-center text-justify">
                    <h1 className="text-lg sm:text-xl md:text-2xl"> Hello! My Name is {props.name}</h1>
                    <div className="flex gap-1 sm:text-xl text-base">
                        <span>I'am a </span>
                        <span className="text-[#7f5af0] flex">
                            <TypewriterComponent
                                options={{
                                    strings: props.strings,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                    <motion.span
                        initial={false}
                        whileHover={{
                            boxShadow: '0 0 20px #7f5af0',
                        }}
                        className="bg-[#7f5af0] w-[150px] text-white py-2 px-4 rounded-md  inline-block flex items-center justify-center gap-2 mt-[20px]"
                        onClick={downloadResume}
                    >
                        Resume
                        <IoIosCloudDownload />
                    </motion.span>
                </div>
                <div className="sm:h-[450px] h-[100vw] shadow-2xl overflow-hidden ">
                    <img src={props.avatar} alt="" className="w-[300px] sm:w-[400px]" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
