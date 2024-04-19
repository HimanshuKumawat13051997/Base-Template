import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

function Projects({ props }) {
    return (
        <div className="flex flex-col bg-[#242629] py-10" id="projects">
            <div className="w-[320px] text-center self-center flex justify-center overflow-hidden">
                <motion.h1
                    className="w-[300px] relative text-[45px] font-semibold "
                    initial={{ right: '-200px' }}
                    whileInView={{ right: '0px' }}
                    transition={{ duration: 1.2 }}
                >
                    Projects
                </motion.h1>
            </div>
            <div className="sm:mx-[55px] md:mx-[60px] lg:mx-[120px] mx-[10px]">
                <ul className="flex h-[450px] overflow-x-scroll py-[20px] flex-[0_0_600px] mx-auto">
                    {props.map((item, index) => {
                        return (
                            <motion.li
                                key={index}
                                className="projectli relative"
                                initial={{
                                    top: '-200px',
                                }}
                                whileInView={{
                                    top: '0px',
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProjectCard props={item} />
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Projects;
