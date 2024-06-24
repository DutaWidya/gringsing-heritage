import { BaseLayout } from "../layouts";
import { Section, Card, FilterSelect } from "../components";
import { Link } from "react-router-dom";
import { BG_3 } from "../assets/images";
import { useState } from "react";
import { useSearchDataKain } from "../hooks";

const Dashboard = () => {
    const [pencarian, setPencarian] = useState("");
    const { dataKain, error, isLoading } = useSearchDataKain(pencarian ? pencarian : "");

    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setPencarian(value);
    };

    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="py-40 flex flex-col items-center">
                    <h1 className="font-ivyPresto uppercase text-6xl md:text-8xl">
                        Gringsing Heritage!
                    </h1>
                    <p className="max-w-[800px] text-center py-8 text-xl ">
                        Selamat datang di Gringsing Heritage, platform digital yang didedikasikan
                        untuk melestarikan keindahan dan warisan kain Gringsing Bali.
                    </p>
                </div>

                <Section title="section 1" number={1} />
                <div className="flex flex-col gap-6">
                    <h1 className="font-ivyPresto uppercase text-6xl md:text-8xl">
                        Let&apos;s explore
                    </h1>

                    {/* filtering here */}
                    <div className="">
                        <input
                            type="text"
                            name="pencarian"
                            id="pencarian"
                            placeholder="Search..."
                            className="w-full h-full p-3 border border-gray-400 focus-visible:ring-transparent focus-visible:outline-1 focus-visible:outline-gray-600/50"
                            value={pencarian}
                            onChange={handleChange}
                        />
                    </div>
                    {isLoading ? (
                        <div className="border w-full text-center py-8 text-xl ">
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <>
                            {dataKain.length > 0 ? (
                                <div className="grid md:grid-cols-2 gap-4">
                                    {dataKain.map((data, i) => (
                                        <Card
                                            key={i}
                                            title={data.nama_motif}
                                            description={data.deskripsi_motif}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="border w-full text-center py-8 text-xl ">
                                    <p>No Data Found</p>
                                </div>
                            )}
                        </>
                    )}
                </div>

                <Section title="section 2" number={2} />
                <div className="py-40 flex flex-col items-center">
                    <h1 className="font-ivyPresto uppercase text-6xl md:text-8xl">learn more!</h1>
                    <p className="max-w-[800px] text-center py-8">
                        Apakah Anda penasaran dengan keunikan dan keindahan Kain Gringsing? Jangan
                        lewatkan kesempatan untuk menggali lebih dalam dan menemukan berbagai
                        informasi menarik yang telah kami siapkan. Kunjungi halaman About untuk
                        mengetahui lebih banyak dan memperkaya wawasan Anda tentang kain tradisional
                        yang menakjubkan ini.
                    </p>
                    <Link
                        to="/about"
                        className="box-border py-2 px-8 rounded-full bg-[#2d2824] text-white font-semibold hover:text-[#2d2824] border border-transparent hover:bg-transparent hover:border hover:border-[#2d2824] transition-all duration-300"
                    >
                        Let&apos;s get started
                    </Link>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Dashboard;
