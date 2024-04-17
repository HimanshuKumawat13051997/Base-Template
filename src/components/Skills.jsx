import { motion } from 'framer-motion';
import { Skillcard } from './Skillcard';

function Skills({ props }) {
    return (
        <div className="flex flex-col gap-5 p-2" id="skills">
            <div className="w-[320px] self-center flex justify-center overflow-hidden">
                <motion.h1
                    className="w-[300px] relative text-[45px] font-semibold "
                    initial={{ left: '-200px' }}
                    whileInView={{ left: '0px' }}
                    transition={{ duration: 1.2 }}
                >
                    Skills
                </motion.h1>
            </div>
            <div className="skillcard px-[8px] lg:px-[150px]">
                {props.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ scale: 1 }}
                            whileHover={{
                                scale: 1.5,
                            }}
                        >
                            <Skillcard props={item} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;
