import React from "react";
import Select from "react-select";

export const FilterSelect = () => {
    const options1 = [
        {
            value: "Warna1",
            label: "Warna1",
        },
        {
            value: "Warna2",
            label: "Warna2",
        },
        {
            value: "Warna3",
            label: "Warna3",
        },
    ];
    const options2 = [
        {
            value: "Motif1",
            label: "Motif1",
        },
        {
            value: "Motif2",
            label: "Motif2",
        },
        {
            value: "Motif3",
            label: "Motif3",
        },
    ];
    const options3 = [
        {
            value: "Ukuran1",
            label: "Ukuran1",
        },
        {
            value: "Ukuran2",
            label: "Ukuran2",
        },
        {
            value: "Ukuran3",
            label: "Ukuran3",
        },
    ];
    return (
        <>
            <label className="font-semibold" htmlFor="options1">
                Warna
                <Select id="options1" name="options1" options={options1} className="font-normal" />
            </label>
            <label className="font-semibold" htmlFor="options2">
                Motif
                <Select id="options2" name="options2" options={options2} className="font-normal" />
            </label>
            <label className="font-semibold" htmlFor="options2">
                Ukuran
                <Select id="options2" name="options2" options={options3} className="font-normal" />
            </label>
        </>
    );
};
