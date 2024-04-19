import { Link } from 'react-router-dom';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

export const ProjectCard = ({ props }) => {
    return (
        <div className="bg-[#16161a] shadow-2xl p-5 w-[280px] rounded-md flex flex-col items-center h-[400px] gap-3">
            <div className="w-[240px] h-[100px] overflow-hidden rounded ">
                <img src={props.image} alt="" className="rounded " />
            </div>
            <div className=" text-start mt-2 text-lg font-semibold self-start ">
                <Link to={props.link} className="flex flex-row items-center gap-2">
                    <span className="text-[16px]">{props.title}</span>
                    <span>
                        <IoChevronForwardCircleOutline />
                    </span>
                </Link>
            </div>
            <div className="text-[#94a1b2] text-justify text-[13px] mt-2">
                <p>{props.description}</p>
            </div>
            <div className="text-[12px] text-start flex mt-2 self-start flex-wrap">
                {props.techStack.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className="bg-[#94a1b2] h-[30px] rounded-sm mr-1 flex items-center justify-center text-[8px] m-1 inline-block p-[10px]"
                        >
                            {item}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};
