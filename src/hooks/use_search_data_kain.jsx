import axios from "axios";
import { useState, useEffect } from "react";
import { all_kain_mapper, search_kain_query_builder } from "../utilities";

export const useSearchDataKain = (pencarian) => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataKain, setDataKain] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const base_url = "http://localhost:3030/gringsing_heritage/sparql";
        let query = "";
        query = search_kain_query_builder(pencarian);

        setIsLoading(true);
        setError(null);

        console.log(query);

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
    }, [pencarian]);

    return { isLoading, error, dataKain };
};
