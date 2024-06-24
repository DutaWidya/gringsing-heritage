import { BaseLayout } from "../layouts";
import { FilterSelect } from "../components";
import { useGetAllKainGringsing } from "../hooks";
import { useState } from "react";
import { Card } from "../components";

const Galery = () => {
    const [size, setSize] = useState(8);
    const [selectedWarna, setSelectedWarna] = useState("");
    const [selectedMotif, setSelectedMotif] = useState("");
    const [selectedUkuran, setSelectedUkuran] = useState("");

    const { dataKain, error, isLoading } = useGetAllKainGringsing(
        selectedWarna.value ? selectedWarna.value : "",
        selectedUkuran.value ? selectedUkuran.value : "",
        selectedMotif.value ? selectedMotif.value : "",
        size
    );

    const handleLoadMore = () => {
        setSize((size) => {
            if (size > 32) return 8;

            return size + 8;
        });
    };

    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center md:py-20 gap-3">
                <h1 className="md:max-w-[70%] lg-max-w-[80%] text-center font-ivyPresto uppercase text-5xl md:text-8xl my-5">
                    Let&apos;s explore
                </h1>

                {/* filtering here */}
                <div className="grid md:grid-cols-3 gap-3 text-left border p-3 w-full md:max-w-[50%]">
                    <FilterSelect
                        selectedWarna={selectedWarna}
                        setSelectedWarna={setSelectedWarna}
                        selectedMotif={selectedMotif}
                        setSelectedMotif={setSelectedMotif}
                        selectedUkuran={selectedUkuran}
                        setSelectedUkuran={setSelectedUkuran}
                    />
                </div>

                {dataKain.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-8">
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

                <button
                    onClick={() => handleLoadMore()}
                    className="mt-5 box-border py-2 px-8 rounded-full bg-[#2d2824] text-white font-semibold hover:text-[#2d2824] border border-transparent hover:bg-transparent hover:border hover:border-[#2d2824] transition-all duration-300"
                >
                    Load More
                </button>
            </div>
        </BaseLayout>
    );
};

export default Galery;
