import { useLocation, Link } from "react-router-dom";
import { navlinks } from "../config";

export const NavigationBar = () => {
    const location = useLocation();

    return (
        <div className="w-full contianer mx-auto py-5 px-12 flex justify-between items-center border">
            <span className="flex-1 uppercase font-bold text-2xl">GH</span>
            <ul className="flex gap-5 flex-auto items-center justify-center">
                {navlinks.map((nav) => (
                    <Link
                        to={nav.href}
                        className={`nav-item ${location.pathname === nav.href ? "active" : ""} `}
                        key={nav.id}
                    >
                        <li>{nav.name}</li>
                    </Link>
                ))}
            </ul>
            <span className="flex-1 flex justify-end">
                <Link
                    to="/kontak"
                    className="box-border py-2 px-8 rounded-full bg-[#2d2824] text-white font-semibold hover:text-[#2d2824] border border-transparent hover:bg-transparent hover:border hover:border-[#2d2824] transition-all duration-300"
                >
                    Kontak
                </Link>
            </span>
        </div>
    );
};
