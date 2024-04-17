export const drawer = () => {
    return (
        <div className="md:hidden absolute  w-[100vw] h-screen bg-black flex flex-col items-center gap-[50px] justify-center z-10">
            <span className="hover:line-through">About</span>
            <span className="hover:line-through">Skills</span>
            <span className="hover:line-through">Services</span>
            <span className="hover:line-through">Projects</span>
            <span className="hover:line-through">Timeline</span>
            <span className="hover:line-through">Testimonial</span>
            <span className="hover:line-through">Contact</span>
        </div>
    );
};
