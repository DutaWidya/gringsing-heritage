import { useLocation, Link } from "react-router-dom";
import { navlinks } from "../config";
import { useState } from "react";

export const Footer = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [navigations] = useState([...navlinks, { id: 6, name: "Kontak", href: "/kontak" }]);

    const handleNavbar = () => {
        setOpen((isOpen) => !isOpen);
    };
    return (
        <div className="hidden md:flex container mx-auto px-4 md:px-12 flex-col items-center justify-center w-full font-medium">
            <div className="w-full flex items-center border-y border-[#2d2824] py-4">
                <ul
                    className={
                        `absolute bg-white flex flex-col gap-5 flex-auto items-center justify-center md:relative md:flex-row transition-all ease-in-out duration-1000 ` +
                        `${
                            open
                                ? "top-0 left-0 right-0 bottom-0"
                                : "top-0 -left-[100vw] right-[100vw] bottom-0 md:left-0 md:right-0"
                        }`
                    }
                >
                    {navigations.map((nav) => (
                        <Link
                            to={nav.href}
                            className={`nav-item ${
                                location.pathname === nav.href ? "active" : ""
                            } `}
                            key={nav.id}
                            onClick={handleNavbar}
                        >
                            <li>{nav.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <span className="py-4">© Gringsing Heritage. All Rights Reserved</span>
        </div>
    );
};
