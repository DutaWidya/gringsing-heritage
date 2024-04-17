import { useLocation, Link } from "react-router-dom";
import { navlinks } from "../config";
import { useState, useEffect, useRef } from "react";

const show =
    "isolate bg-white fixed top-0 left-0 right-0 ease-in-out duration-500 z-10 bg-white/50 backdrop-blur";
const hide =
    "isolate bg-white fixed -top-[90px] left-0 right-0 ease-in-out duration-500 z-10 bg-white/50 backdrop-blur";

// className={
//     "sticky top-0 bg-white/50 backdrop-blur contianer py-5 px-4 md:px-12 flex justify-between ease-in-out transition-all duration-1000 items-center " +
//     `${open ? " h-[100vh] " : " h-[90px] "}`
// }

export const NavigationBar = () => {
    const location = useLocation();
    const prevScrollY = useRef(0);
    const [open, setOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [navClassName, setNavClassName] = useState(show);

    const handleNavbar = () => {
        if (open) {
            setOpen((isOpen) => !isOpen);
            setTimeout(() => {
                setNavClassName(show);
            }, 500);
        } else {
            setNavClassName(show.concat(" h-[100vh] md:h-[90px]"));
            setOpen((isOpen) => !isOpen);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && showNavbar) {
                setShowNavbar(false);
            }
            if (prevScrollY.current > currentScrollY && !showNavbar) {
                setShowNavbar(true);
            }

            prevScrollY.current = currentScrollY;
            // console.log(showNavbar, currentScrollY);
            if (showNavbar) {
                open
                    ? setNavClassName(show.concat(" h-[100vh] md:h-[90px]"))
                    : setNavClassName(show);
            } else {
                setNavClassName(hide);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [showNavbar]);

    return (
        <div className={navClassName}>
            <div className="flex container mx-auto px-4 md:px-8 py-4">
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
                            className={`nav-item ${
                                location.pathname === nav.href ? "active" : ""
                            } `}
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
                <span className="hidden flex-1 md:flex justify-end items-center ">
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
        </div>
    );
};
