import React from "react";
import Select from "react-select";
import { warnaOptions, motifOptions, ukuranOptions } from "../config";

export const FilterSelect = ({
    selectedWarna,
    setSelectedWarna,
    selectedMotif,
    setSelectedMotif,
    selectedUkuran,
    setSelectedUkuran,
}) => {
    const handleChangeWarna = (option) => {
        option ? setSelectedWarna(option) : setSelectedWarna("");
    };
    const handleChangeUkuran = (option) => {
        option ? setSelectedUkuran(option) : setSelectedUkuran("");
    };
    const handleChangeMotif = (option) => {
        option ? setSelectedMotif(option) : setSelectedMotif("");
    };

    return (
        <>
            <label className="font-semibold" htmlFor="options1">
                Warna
                <Select
                    id="options1"
                    name="options1"
                    options={warnaOptions}
                    value={selectedWarna}
                    onChange={handleChangeWarna}
                    className="font-normal"
                    isClearable
                />
            </label>
            <label className="font-semibold" htmlFor="options2">
                Motif
                <Select
                    id="options2"
                    name="options2"
                    options={motifOptions}
                    value={selectedMotif}
                    onChange={handleChangeMotif}
                    className="font-normal"
                    isClearable
                />
            </label>
            <label className="font-semibold" htmlFor="options3">
                Ukuran
                <Select
                    id="options3"
                    name="options3"
                    options={ukuranOptions}
                    value={selectedUkuran}
                    onChange={handleChangeUkuran}
                    className="font-normal"
                    isClearable
                />
            </label>
        </>
    );
};
