import { formatToTwoDigits } from "../utilities";

export const Section = ({ title, number }) => {
    return (
        <div className="w-full flex justify-between border-t border-[#2d2824] font-semibold text-sm my-12">
            <span className="capitalize">{title}</span>
            <span>{formatToTwoDigits(number)}</span>
        </div>
    );
};
