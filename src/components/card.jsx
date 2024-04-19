export function Card({ imgUrl, title, subtitle, description }) {
    console.log(subtitle);
    return (
        <div className="text-left group hover:pb-20 transition-all ease-in-out duration-500 relative">
            <img src={imgUrl} alt={title} />
            <p className="mt-2">
                <strong className="capitalize font-ivyPresto">{title}</strong> - {subtitle}
            </p>
            <div className="absolute opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all ease-in-out duration-500 w-full">
                <p>{description}</p>
            </div>
        </div>
    );
}
