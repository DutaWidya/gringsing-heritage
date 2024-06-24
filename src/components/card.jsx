import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Card({ title, description }) {
    const navigate = useNavigate();
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        const url = `/motif/${title}.png`;
        const link = new URL(url, import.meta.url).href;
        setImgUrl(link);
    }, [title]);

    const handleNavigate = (nama_motif) => {
        console.log("click");
        navigate(`/detail?nama_motif=${nama_motif}`);
    };

    return (
        <div
            onClick={() => handleNavigate(title)}
            className="text-left group hover:pb-40 transition-all ease-in-out duration-500 relative cursor-pointer bg-white"
        >
            <div className="aspect-square rounded-md overflow-hidden">
                <img
                    src={imgUrl}
                    alt={title}
                    className="object-cover h-full w-full scale-[1.1] hover:scale-[1.3] transition-all duration-300"
                />
            </div>
            <p className="my-2 text-center">
                <strong className="capitalize font-ivyPresto">{title}</strong>
            </p>
            <div className="absolute opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all ease-in-out duration-500 w-full text-justify indent-10">
                <p>{description}</p>
            </div>
        </div>
    );
}
