import { delay, motion } from 'framer-motion';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function About({ props }) {
    return (
        <div className="p-5 bg-[#242629] flex flex-col center">
            <div className="w-[320px] self-center flex justify-center overflow-hidden" id="about">
                <motion.h1
                    className="text-center w-[300px] relative text-[45px] font-semibold"
                    initial={{ right: '-150px' }}
                    whileInView={{ right: '0px' }}
                    transition={{ duration: 1.2 }}
                >
                    About
                </motion.h1>
            </div>
            <div className="flex sm:flex-row-reverse flex-col-reverse items-center sm:items-start gap-5">
                <div className="flex justify-center sm:w-2/4 w-full text-justify">
                    <div className="w-[500px]">
                        <p className="text-xl font-bold">{props.title}</p>
                        <p className="text-[#94a1b2] texr-lg">{props.description}</p>
                        <div className="flex gap-5 mt-[20px]">
                            <Link to="https://www.instagram.com/ni8marehikks/">
                                <FaSquareInstagram size={'40px'} color="#7f5af0" />
                            </Link>

                            <Link to="https://www.linkedin.com/in/himanshu-kumawat-488b58266/">
                                <FaLinkedin size={'40px'} color="#7f5af0" />
                            </Link>
                            <Link to="https://github.com/HimanshuKumawat13051997">
                                <FaGithubSquare size={'40px'} color="#7f5af0" />
                            </Link>
                        </div>
                    </div>
                </div>
                <motion.div
                    className="flex justify-center w-2/4  mix-blend-multiply"
                    initial={{
                        scale: 0,
                    }}
                    whileInView={{
                        scale: 1,
                    }}
                    transition={{ duration: 1.2 }}
                >
                    <img src={props.avatar} alt="" className="w-[300px] sm:-w[400px] mix-blend-multiply" />
                </motion.div>
            </div>
        </div>
    );
}

export default About;
