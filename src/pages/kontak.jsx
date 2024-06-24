import { BaseLayout } from "../layouts";

const Kontak = () => {
    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center py-20 md:py-20 gap-3">
                <h1 className="md:max-w-[70%] lg-max-w-[80%] text-center font-ivyPresto uppercase text-5xl md:text-8xl my-5">
                    Kontak Penjual
                </h1>

                <a
                    href="https://wa.me/6287762715959"
                    target="_blank"
                    className="w-full p-10 rounded-xl md:max-w-[70%] xl:max-w-[50%] bg-[#2d2824] hover:bg-[#2d2824]/90  text-center text-white transition-all duration-500"
                >
                    <p className="text-2xl md:text-6xl capitalize">Ibu ketut sumiarti</p>
                    <p>click me!</p>
                </a>
            </div>
        </BaseLayout>
    );
};

export default Kontak;
