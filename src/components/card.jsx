export function Card({ imgUrl, title, description }) {
    const image = new URL(imgUrl, import.meta.url).href;
    return (
        <div className="text-left">
            <img src={image} alt={title} />
            <p className="mt-2">
                <strong className="capitalize font-ivyPresto">{title}</strong> - {description}
            </p>
        </div>
    );
}
