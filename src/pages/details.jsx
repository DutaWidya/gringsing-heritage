import React from "react";
import useGetSingleKainGringsing from "../hooks/use_get_single_kain_gringsing";
import { BaseLayout } from "../layouts";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Details = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const nama_motif = searchParams.get("nama_motif");

    const { isLoading, error, kain } = useGetSingleKainGringsing(nama_motif);
    const [imgUrl, setImgUrl] = useState("");

    if (error) {
        return (
            <BaseLayout>
                <div className="flex flex-col items-center justify-center md:py-20 gap-3 h-['100vh']">
                    <h1 className="md:max-w-[70%] lg-max-w-[80%] text-center font-ivyPresto uppercase text-5xl md:text-8xl my-5">
                        Oops...
                    </h1>
                    <p>{error.message}</p>
                </div>
            </BaseLayout>
        );
    }

    useEffect(() => {
        const url = `/motif/${nama_motif}.png`;
        const link = new URL(url, import.meta.url).href;
        setImgUrl(link);
    }, [nama_motif]);

    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center md:py-20 gap-3 h-['100vh']">
                {/* image here */}
                <img src={imgUrl} alt={kain.nama_motif} />
                {/* image here */}
                {isLoading ? (
                    <h1 className="md:max-w-[70%] lg-max-w-[80%] text-center font-ivyPresto uppercase text-5xl md:text-8xl my-5">
                        Loading...
                    </h1>
                ) : (
                    <>
                        <h1 className="md:max-w-[70%] lg-max-w-[80%] text-center font-ivyPresto uppercase text-5xl md:text-8xl my-5">
                            {kain.nama_motif}
                        </h1>
                        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 justify-start md:gap-20 w-full md:w-fit">
                            {kain.fungsi ? (
                                <div className="flex flex-col items-start text-left">
                                    <h2 className="font-semibold">Fungsi</h2>
                                    <ul className="list-disc list-inside">
                                        {kain.fungsi.map((uk, i) => (
                                            <li key={i}>{uk}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <>Loading...</>
                            )}

                            {kain.warna ? (
                                <div className="flex flex-col items-start text-left">
                                    <h2 className="font-semibold">Warna</h2>
                                    <ul className="list-disc list-inside">
                                        {kain.warna.map((uk, j) => (
                                            <li key={j}>{uk}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <>Loading...</>
                            )}

                            {kain.ukuran ? (
                                <div className="flex flex-col items-start text-left">
                                    <h2 className="font-semibold">Ukuran</h2>
                                    <ul className="list-disc list-inside">
                                        {kain.ukuran.map((uk, k) => (
                                            <li key={k}>{uk}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <>Loading...</>
                            )}
                        </div>

                        <div className="mt-10 lg:max-w-[60%] md:max-w-[80%]">
                            <h2 className="font-semibold font-ivyPresto text-xl">Deskripsi</h2>
                            <p>{kain.deskripsi_motif}</p>
                        </div>
                    </>
                )}

                <div className="flex flex-col gap-3 mt-10 text-center">
                    <Link
                        to="/galeri"
                        className="box-border py-2 px-8 rounded-full bg-[#2d2824] text-white font-semibold hover:text-[#2d2824] border border-transparent hover:bg-transparent hover:border hover:border-[#2d2824] transition-all duration-300"
                    >
                        Galeri
                    </Link>
                    <Link
                        to="/"
                        className="box-border py-2 px-8 rounded-full bg-[#2d2824] text-white font-semibold hover:text-[#2d2824] border border-transparent hover:bg-transparent hover:border hover:border-[#2d2824] transition-all duration-300"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Details;
