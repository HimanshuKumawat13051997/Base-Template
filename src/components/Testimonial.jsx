import { TestimonialCard } from './TestimonialCard';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Carousel from './Crousal';

function Testimonial({ props }) {
    return (
        <div className="flex flex-col items-center pb-8 overflow-hidden" id="testi">
            <div className="w-[320px] self-center flex justify-center overflow-hidden">
                <motion.h1
                    className="w-[300px] relative text-[45px] font-semibold "
                    initial={{ left: '-300px' }}
                    whileInView={{ left: '0px' }}
                    transition={{ duration: 1.2 }}
                >
                    Testimonials
                </motion.h1>
            </div>
            <Carousel props={props} />
        </div>
    );
}

export default Testimonial;
