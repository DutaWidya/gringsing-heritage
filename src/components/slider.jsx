import { useState } from "react";
import { Slide1, Slide2, Slide3 } from "../assets/images";

export const Slider = () => {
    const [slides, setSlides] = useState([Slide1, Slide2, Slide3]);
    const [classNames, setClassNames] = useState([
        "w-[711px] h-[400px] absolute top-0 bottom-0 left-0 right-[50%] m-auto transition-all ease-in-out duration-500",
        "w-[960px] h-[540px] absolute top-0 bottom-0 left-0 right-0 m-auto transition-all ease-in-out duration-500 z-10 shadow-white",
        "w-[711px] h-[400px] absolute top-0 bottom-0 left-[50%] right-0 m-auto transition-all ease-in-out duration-500",
    ]);

    const handleSlide = (direction) => {
        setClassNames((oldClassNames) => {
            const newClassNames = [...oldClassNames];
            if (direction === "left") {
                const tempClassName = newClassNames.shift();
                newClassNames.push(tempClassName);
            } else {
                const tempClassName = newClassNames.pop();
                newClassNames.unshift(tempClassName);
            }
            return newClassNames;
        });
    };

    return (
        <>
            <div className="h-[100vh] w-[100vw] relative ">
                {slides.map((slide, i) => (
                    <div key={i} className={classNames[i]}>
                        <img src={slide} />
                        <span>{classNames[i]}</span>
                    </div>
                ))}
            </div>
            <div className="flex gap-3 ">
                <button className="px-4 py-2 border rounded" onClick={() => handleSlide("left")}>
                    prev
                </button>
                <button className="px-4 py-2 border rounded" onClick={() => handleSlide("right")}>
                    next
                </button>
            </div>
        </>
    );
};
