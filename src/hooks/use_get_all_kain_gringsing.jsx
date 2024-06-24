import { useState, useEffect } from "react";
import axios from "axios";
import { all_kain_mapper, get_all_query_builder } from "../utilities";

export const useGetAllKainGringsing = (warna, ukuran, motif, limit = 8) => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataKain, setDataKain] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const base_url = "http://localhost:3030/gringsing_heritage/sparql";
        const query = get_all_query_builder(warna, ukuran, motif, limit);

        setIsLoading(true);
        setError(null);

        const encodedQuery = encodeURIComponent(query);

        axios
            .post(`${base_url}?query=${encodedQuery}`)
            .then((res) => {
                const result = all_kain_mapper(res.data.results.bindings);
                setDataKain(result);

                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err);
                setIsLoading(false);
            });
    }, [limit, motif, ukuran, warna]);

    return { isLoading, error, dataKain };
};
