export const search_kain_query_builder = (query) => {
    if (query) {
        const query_str = `${query.toLowerCase()}`;

        return `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#>

                SELECT ?Motif ?DeskripsiMotif
                WHERE {
                  ?mtf d:Motif ?Motif .
                  ?mtf d:DeskripsiMotif ?DeskripsiMotif .

                FILTER REGEX(LCASE(?Motif), LCASE("${query_str}"))
                }
                ORDER BY ASC(?Motif)
                LIMIT 8`;
    } else {
        console.log("no query");
        return `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
              PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
              PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#>

              SELECT ?Motif ?DeskripsiMotif
              WHERE {
                ?mtf d:Motif ?Motif .
                ?mtf d:DeskripsiMotif ?DeskripsiMotif .
              }

              ORDER BY ASC(?Motif)
              LIMIT 8`;
    }
};
