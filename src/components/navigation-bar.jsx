import { useLocation, Link } from "react-router-dom";
import { navlinks } from "../config";
import { useState } from "react";

export const NavigationBar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const handleNavbar = () => {
        setOpen((isOpen) => !isOpen);
    };

    return (
        <div
            className={
                "sticky top-0 bg-white/50 backdrop-blur contianer py-5 px-4 md:px-12 flex justify-between ease-in-out transition-all duration-1000 items-center " +
                `${open ? " h-[100vh] " : " h-[90px] "}`
            }
        >
            <Link
                to="/"
                className="flex-1 uppercase font-bold text-2xl z-10 min-h-[50px] flex items-center"
            >
                GH
            </Link>
            <div
                className={
                    `absolute bg-white md:bg-transparent flex flex-col gap-4 md:gap-8 flex-auto items-center justify-center md:relative md:flex-row transition-all ease-in-out duration-1000 ` +
                    `${
                        open
                            ? "top-0 left-0 right-0 bottom-0"
                            : "-top-[100vh] left-0 right-0 bottom-[100vh] md:top-0 md:bottom-0"
                    }`
                }
            >
                {navlinks.map((nav) => (
                    <Link
                        to={nav.href}
                        className={`nav-item ${location.pathname === nav.href ? "active" : ""} `}
                        key={nav.id}
                        onClick={handleNavbar}
                    >
                        {nav.name}
                    </Link>
                ))}
                <Link
                    to="/kontak"
                    className={`md:hidden nav-item ${
                        location.pathname === "/kontak" ? "active" : ""
                    } `}
                >
                    Kontak
                </Link>
            </div>
            <span className="hidden flex-1 md:flex justify-end ">
                <Link
                    to="/kontak"
                    className="py-2 px-8 rounded-full bg-[#2d2824] text-white font-semibold hover:text-[#2d2824] box-border border border-transparent hover:bg-transparent hover:border hover:border-[#2d2824] transition-all duration-300"
                >
                    Kontak
                </Link>
            </span>
            <button onClick={handleNavbar} className="z-10">
                <div className={`navbar-toogle ` + (open ? "open" : "")}>
                    <div className="bar"></div>
                </div>
            </button>
        </div>
    );
};
