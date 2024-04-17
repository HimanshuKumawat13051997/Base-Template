export const TestimonialCard = ({ data }) => {
    return (
        <div className=" h-[250px] w-[300px] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
                <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full mr-4" src={data.image.url} alt={data.name} />
                    <div>
                        <div className="text-sm font-medium text-gray-900">{data.name}</div>
                        <div className="text-xs text-gray-600">{data.position}</div>
                    </div>
                </div>
                <p className="text-gray-700 mt-2 text-[12px] ">{data.review}</p>
            </div>
        </div>
    );
};
