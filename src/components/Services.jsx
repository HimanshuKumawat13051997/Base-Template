import React from 'react';
import { ServicesCard } from './ServicesCard';
import { motion } from 'framer-motion';

function Services({ props }) {
    return (
        <div className="flex flex-col" id="services">
            <div className="w-[320px] self-center flex justify-center overflow-hidden">
                <motion.h1
                    className="w-[300px] relative text-[45px] font-semibold "
                    initial={{ left: '-300px' }}
                    whileInView={{ left: '0px' }}
                    transition={{ duration: 1.2 }}
                >
                    Services
                </motion.h1>
            </div>
            <div className="ag-format-container">
                <div className="ag-courses_box">
                    {props.map((item) => {
                        return <ServicesCard key={item._id} props={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Services;
