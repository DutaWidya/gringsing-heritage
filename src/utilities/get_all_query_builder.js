export function get_all_query_builder(warna, ukuran, motif, limit = 100) {
    if (warna && ukuran && motif) {
        return `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#>

            SELECT ?Motif ?DeskripsiMotif ?Ukuran ?Fungsi ?Warna
            WHERE {
              ?mtf d:Motif ?Motif ;
              d:DeskripsiMotif ?DeskripsiMotif .
              ?wrn d:Warna ?Warna.
              ?ukr d:Ukuran ?Ukuran .
              ?fngs d:FungsiKain ?Fungsi .

              FILTER (
                (?Motif = "${motif}" && ?Ukuran = "${ukuran}" && ?Warna = "${warna}" )
              )
            }
            ORDER BY ASC(?Motif)
            LIMIT ${limit}`;
    }

    if (warna && ukuran && !motif) {
        return `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#>

                SELECT ?Motif ?DeskripsiMotif ?Ukuran ?Fungsi ?Warna
                WHERE {
                  ?mtf d:Motif ?Motif ;
                  d:DeskripsiMotif ?DeskripsiMotif .
                  ?wrn d:Warna ?Warna.
                  ?ukr d:Ukuran ?Ukuran .
                  ?fngs d:FungsiKain ?Fungsi .

                  FILTER (
                    (?Ukuran = "${ukuran}" && ?Warna = "${warna}" )
                  )
                }
                ORDER BY ASC(?Motif)
                LIMIT ${limit}`;
    }

    if (warna && !ukuran && motif) {
        return `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
              PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
              PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#>

              SELECT ?Motif ?DeskripsiMotif ?Warna
              WHERE {
                ?mtf d:Motif ?Motif ;
                d:DeskripsiMotif ?DeskripsiMotif .
                ?wrn d:Warna ?Warna.


                FILTER (
                  (?Motif = "${motif}" && ?Warna = "${warna}" )
                )
              }
              ORDER BY ASC(?Motif)
              LIMIT ${limit}`;
    }

    if (!warna && ukuran && motif) {
        return `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#>

                SELECT ?Motif ?DeskripsiMotif ?Ukuran ?Fungsi
                WHERE {
                  ?mtf d:Motif ?Motif ;
                  d:DeskripsiMotif ?DeskripsiMotif .
                  ?ukr d:Ukuran ?Ukuran .
                  ?fngs d:FungsiKain ?Fungsi .

                  FILTER (
                    (?Ukuran = "${ukuran}" && ?Motif = "${motif}" )
                  )
                }
                ORDER BY ASC(?Motif)
                LIMIT ${limit}`;
    }

    if (warna && !ukuran && !motif) {
        return `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#>

                SELECT ?Motif ?DeskripsiMotif ?Warna
                WHERE {
                  ?mtf d:Motif ?Motif .
                  ?mtf d:DeskripsiMotif ?DeskripsiMotif .
                  ?mtf d:MemilikiWarna ?wrn .
                  ?wrn d:Warna ?Warna .
                  
                  FILTER (?Warna = "${warna}")
                }
                ORDER BY ASC(?Motif)
                LIMIT ${limit}`;
    }

    if (!warna && ukuran && !motif) {
        return `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#>

                SELECT ?Motif ?DeskripsiMotif ?Ukuran ?Fungsi
                WHERE {
                  ?mtf d:Motif ?Motif .
                  ?mtf d:DeskripsiMotif ?DeskripsiMotif .
                  ?ukr d:Ukuran ?Ukuran .
                  ?fngs d:FungsiKain ?Fungsi .

                FILTER (
                    (?Ukuran = "${ukuran}" )
                  )
                }
                ORDER BY ASC(?Motif)
                LIMIT ${limit}`;
    }

    if (!warna && !ukuran && motif) {
        return `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#>

                SELECT ?Motif ?DeskripsiMotif
                WHERE {
                  ?mtf d:Motif ?Motif .
                  ?mtf d:DeskripsiMotif ?DeskripsiMotif .

                FILTER (
                    (?Motif = "${motif}" )
                  )
                }
                ORDER BY ASC(?Motif)
                LIMIT ${limit}`;
    }

    if (!warna && !ukuran && !motif) {
        return `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX d: <http://www.semanticweb.org/asus/ontologies/2024/5/untitled-ontology-6#>

                SELECT ?Motif ?DeskripsiMotif
                WHERE {
                  ?mtf d:Motif ?Motif .
                  ?mtf d:DeskripsiMotif ?DeskripsiMotif .
                }

                ORDER BY ASC(?Motif)
                LIMIT ${limit}`;
    }
}
