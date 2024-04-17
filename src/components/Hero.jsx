import React from 'react';
import TypewriterComponent from 'typewriter-effect';

function Hero({ props }) {
    return (
        <div className="mt-[100px]">
            <div className="w-full gap-3 sm:gap-0 flex sm:flex-row flex-col-reverse justify-center sm:items-start sm:justify-around items-center">
                <div className="w-[300px] md:w-[350px] lg:w-[400px] self-center text-justify">
                    <h1 className="text-lg sm:text-xl md:text-2xl"> Hello My Name is {props.about.name}</h1>
                    <div className="flex gap-1 sm:text-xl text-base">
                        <span>I'am a </span>
                        <span className="text-[#7f5af0] flex">
                            <TypewriterComponent
                                options={{
                                    strings: ['App Developer', 'Web Developer', 'UI & UX Designer', 'Wordpress Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                </div>
                <div className=" sm:h-[450px] h-[80vw] shadow-2xl overflow-hidden">
                    <img src={props.about.avatar.url} alt="" className="w-[300px] sm:w-[400px] relative bottom-[100px]" />
                </div>
            </div>
            <div className="flex items-center justify-center md:gap-[120px] sm:gap-[50px] gap-2 mt-[20px] sm:text-lg md:text-xl text-[15px] text-[#94a1b2]  h-[150px]">
                <div className="flex flex-col items-center">
                    <span>Projects Done</span>
                    <span className="text-[#2cb67d]">{props.projects.length} +</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>Offered Services</span>
                    <span className="text-[#2cb67d]">{props.services.length} +</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>Reviewed By</span>
                    <span className="text-[#2cb67d]">{props.testimonials.length} +</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>Known Language</span>
                    <span className="text-[#2cb67d]">{props.skills.length} +</span>
                </div>
            </div>
        </div>
    );
}

export default Hero;
