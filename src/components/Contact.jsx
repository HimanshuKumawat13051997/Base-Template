import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaLocationCrosshairs } from 'react-icons/fa6';

function Contact({ props }) {
    return (
        <section className="flex flex-col items-center pb-[50px] bg-[#242629]" id="contact">
            <div className="w-[320px] self-center flex justify-center overflow-hidden">
                <motion.h1
                    className="w-[300px] relative text-[45px] font-semibold "
                    initial={{ right: '-300px' }}
                    whileInView={{ right: '0px' }}
                    transition={{ duration: 1.2 }}
                >
                    Contact
                </motion.h1>
            </div>
            <div className=" px-4 w-[90%] md:w-[90%] lg:w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-[#94a1b2] mb-4 text-justify">
                            We'd love to hear from you. Whether you have a question about our services, want to give us feedback, or just want to say
                            hi, we'll get back to you as soon as possible.
                        </p>
                        <ul className="text-[#94a1b2] ">
                            <li className="flex items-center mb-2 gap-[20px]">
                                <FaLocationCrosshairs />
                                <motion.span
                                    className="inline-block"
                                    initial={{ scale: 1, rotate: 0 }}
                                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 10, 0] }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {props.address}
                                </motion.span>
                            </li>
                            <li className="flex items-center gap-[20px] mb-2">
                                <MdEmail />
                                <motion.span
                                    className="inline-block"
                                    initial={{ scale: 1, rotate: 0 }}
                                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 10, 0] }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {props.contactEmail}
                                </motion.span>
                            </li>
                            <li className="flex items-center gap-[20px] ">
                                <MdOutlineLocalPhone />
                                <motion.span
                                    className="inline-block  "
                                    initial={{ scale: 1, rotate: 0 }}
                                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 10, 0] }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {props.phoneNumber}
                                </motion.span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form className="grid grid-cols-1 gap-4">
                            <input type="text" placeholder="Your Name" className="block w-full p-2 border border-gray-300 rounded-md text-[black]" />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="block w-full p-2 border border-gray-300 rounded-md text-[black]"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="block w-full p-2 border border-gray-300 rounded-md text-[black]"
                                rows="4"
                            ></textarea>
                            <motion.span
                                initial={false}
                                whileHover={{
                                    boxShadow: '0 0 20px #7f5af0',
                                }}
                                className="bg-[#7f5af0] text-white py-2 px-4 rounded-md transition duration-200 inline-block flex items-center justify-center"
                            >
                                Send Message
                            </motion.span>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
