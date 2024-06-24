import { useState, useEffect } from "react";
import axios from "axios";
import { kain_mapper } from "../utilities";

const useGetSingleKainGringsing = (nama_motif) => {
    const [isLoading, setIsLoading] = useState(false);
    const [kain, setKain] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!nama_motif) return; // Prevent unnecessary requests

        const base_url = "http://localhost:3030/gringsing_heritage/sparql";
        const query = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#> SELECT ?Motif ?DeskripsiMotif ?Ukuran ?Fungsi ?Warna WHERE { ?mtf d:Motif ?Motif . OPTIONAL { ?mtf d:DeskripsiMotif ?DeskripsiMotif . } OPTIONAL { ?mtf d:MemilikiUkuran ?ukrn . ?ukrn d:Ukuran ?Ukuran . OPTIONAL { ?fngs d:FungsiKain ?Fungsi . } } OPTIONAL { ?mtf d:MemilikiWarna ?wrn . ?wrn d:Warna ?Warna . } FILTER (?Motif = "${nama_motif}") }`;
        const encodedQuery = encodeURIComponent(query);

        setIsLoading(true);
        setError(null);

        axios
            .post(`${base_url}?query=${encodedQuery}`)
            .then((res) => {
                const kain_result = kain_mapper(res.data);
                setKain(kain_result);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err);
                setIsLoading(false);
            });
    }, [nama_motif]);

    return { kain, isLoading, error };
};

export default useGetSingleKainGringsing;
