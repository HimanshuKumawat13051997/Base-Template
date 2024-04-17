import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Skillcard = ({ props }) => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: percentage / 100,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 },
                },
            };
        },
    };

    return (
        <div className=" flex flex-col items-center ">
            <div className="font-bold text-xl mb-2">{props.name}</div>
            <div className="flex items-center mb-2">
                <div className="w-[100px] bg-gray-200 rounded-full">
                    <motion.div
                        className="bg-[#7f5af0] text-xs leading-none py-1 text-center text-white rounded-full"
                        initial={{ width: `0%` }}
                        whileInView={{ width: `${props.percentage}%` }}
                        transition={{ duration: 1.2 }}
                    >
                        <motion.span className="block" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
                            {props.percentage}%
                        </motion.span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
