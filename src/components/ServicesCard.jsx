import { motion, AnimatePresence } from 'framer-motion';

export const ServicesCard = ({ props }) => {
    return (
        <div className="ag-courses_item ">
            <div className="ag-courses-item_link  bg-[image:var(--image-url)]" style={{ '--image-url': `url(${props.image.url})` }}>
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">{props.name}</div>
                <div className="ag-courses-item_date-box">
                    Charge:
                    <span className="ag-courses-item_date"> {props.charge}</span>
                </div>
            </div>
        </div>
    );
};
