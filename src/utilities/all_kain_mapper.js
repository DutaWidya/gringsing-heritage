export function all_kain_mapper(data_kain) {
    let data = [];

    data = data_kain.map((kain) => {
        return {
            nama_motif: kain.Motif.value,
            deskripsi_motif: kain.DeskripsiMotif.value,
        };
    });

    return data;
}
