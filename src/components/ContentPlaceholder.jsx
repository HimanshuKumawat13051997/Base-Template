import { motion } from 'framer-motion';

export const ContentPlaceholder = ({ props }) => {
    const fullstartdate = new Date(props.startDate);
    const startyear = fullstartdate.getFullYear();
    const fullenddate = new Date(props.endDate);
    const endyear = fullenddate.getFullYear();
    return (
        <motion.div
            variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
            transition={{ duration: 0.8 }}
            className="content-placeholder flex flex-col text-justify px-5 "
        >
            <span className="text-[#94a1b2]">
                <span className="text-lg font-semibold text-[#fffffe]">Company:</span> {props.company_name} ({startyear}-{endyear})
            </span>
            <div>
                <span className="text-lg font-semibold text-[#fffffe]">Summary:</span>
                <span className="text-[#94a1b2]"> {props.summary}</span>
            </div>
            <div>
                <span className="text-lg font-semibold text-[#fffffe]">Task Done:</span>
                <ul className="list-disc pl-8 pb-4 text-[#94a1b2]">
                    {' '}
                    {props.bulletPoints.map((words) => {
                        return <li className="">{words}</li>;
                    })}
                </ul>
            </div>
        </motion.div>
    );
};
