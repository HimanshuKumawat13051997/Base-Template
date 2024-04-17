import { motion, AnimatePresence, transform } from 'framer-motion';
import { useState } from 'react';
import { ContentPlaceholder } from './ContentPlaceholder';
import { IoIosArrowDown } from 'react-icons/io';

function Timeline({ props }) {
    const [expandedEducation, setExpandedEducation] = useState(null);
    const [expandedExperience, setExpandedExperience] = useState(null);

    return (
        <div className="flex flex-col bg-[#242629] py-10" id="timeline">
            <div className="w-[320px] self-center flex justify-center overflow-hidden">
                <motion.h1
                    className="w-[300px] relative text-[45px] font-semibold "
                    initial={{ right: '-200px' }}
                    whileInView={{ right: '0px' }}
                    transition={{ duration: 1.2 }}
                >
                    Timeline
                </motion.h1>
            </div>
            <div className="sm:px-2 flex gap-10 items-center flex-col ">
                <div className="sm:w-1/2 w-full">
                    <span className="text-3xl font-semibold">Education</span>
                    <div className="mt-2">
                        {props.filteredEducation.map((item, index) => {
                            return (
                                <Accordion
                                    key={`education-${index}`}
                                    i={index}
                                    expanded={expandedEducation}
                                    setExpanded={setExpandedEducation}
                                    props={item}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="sm:w-1/2 w-full">
                    <span className="text-3xl font-semibold">Experiences</span>
                    <div className="mt-2">
                        {props.filteredExperience.map((item, index) => {
                            return (
                                <Accordion
                                    key={`experience-${index}`}
                                    i={index}
                                    expanded={expandedExperience}
                                    setExpanded={setExpandedExperience}
                                    props={item}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;

const Accordion = ({ i, expanded, setExpanded, props }) => {
    const isOpen = i === expanded;

    return (
        <>
            <motion.header
                className=" flex items-center justify-center h-[40px] mb-[20px]"
                initial={false}
                animate={{ backgroundColor: isOpen ? '#FF0088' : '', border: isOpen ? '' : '2px solid white' }}
                onClick={() => setExpanded(isOpen ? null : i)}
            >
                <motion.h1 className=" w-[90%]">{props.jobTitle}</motion.h1>
                <motion.div
                    className=""
                    initial={false}
                    animate={{ rotateX: isOpen ? '180deg' : '0deg' }}
                    onClick={() => setExpanded(isOpen ? null : i)}
                    transition={{ duration: 1.2 }}
                >
                    <IoIosArrowDown />
                </motion.div>
            </motion.header>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <ContentPlaceholder props={props} />
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};
