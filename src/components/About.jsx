import { delay, motion } from 'framer-motion';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';

function About({ props }) {
    return (
        <div className="p-5 bg-[#242629] flex flex-col">
            <div className="w-[320px] self-center flex justify-center overflow-hidden" id="about">
                <motion.h1
                    className="w-[300px] relative text-[45px] font-semibold"
                    initial={{ right: '-150px' }}
                    whileInView={{ right: '0px' }}
                    transition={{ duration: 1.2 }}
                >
                    About
                </motion.h1>
            </div>
            <div className="flex sm:flex-row flex-col-reverse items-center sm:items-start gap-5">
                <div className="flex justify-center sm:w-2/4 w-full text-justify">
                    <div className="w-[500px]">
                        <p className="text-xl font-bold">{props.about.title}</p>
                        <p className="text-[#94a1b2] texr-lg">{props.about.description}</p>
                        <div className="flex gap-5 mt-[20px]">
                            <FaSquareInstagram size={'40px'} color="#7f5af0" />
                            <FaFacebook size={'40px'} color="#7f5af0" />
                            <FaLinkedin size={'40px'} color="#7f5af0" />
                            <FaSquareXTwitter size={'40px'} color="#7f5af0" />
                            <FaGithubSquare size={'40px'} color="#7f5af0" />
                        </div>
                    </div>
                </div>
                <motion.div
                    className="flex justify-center w-2/4"
                    initial={{
                        scale: 0,
                    }}
                    whileInView={{
                        scale: 1,
                    }}
                    transition={{ duration: 1.2 }}
                >
                    <img src={props.about.alternateAvatars[0].url} alt="" className="w-[300px] border-4 rounded-lg border-white" />
                </motion.div>
            </div>
        </div>
    );
}

export default About;
