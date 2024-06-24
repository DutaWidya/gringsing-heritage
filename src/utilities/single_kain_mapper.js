export function kain_mapper(data_kain) {
    const kain = {};
    const result = {};

    result["nama_motif"] = "";
    result["deskripsi_motif"] = "";
    result["ukuran"] = new Set();
    result["fungsi"] = new Set();
    result["warna"] = new Set();

    data_kain.results.bindings.forEach((binding, i) => {
        console.log("binding", i, binding);
        if (!result.nama_motif) result.nama_motif = binding?.Motif?.value ?? "";
        if (!result.deskripsi_motif) result.deskripsi_motif = binding?.DeskripsiMotif?.value ?? "";
        result.ukuran.add(binding?.Ukuran?.value ?? "");
        result.fungsi.add(binding?.Fungsi?.value ?? "");
        result.warna.add(binding?.Warna?.value ?? "");
    });

    kain["nama_motif"] = result.nama_motif;
    kain["deskripsi_motif"] = result.deskripsi_motif;
    kain["ukuran"] = [...result.ukuran];
    kain["fungsi"] = [...result.fungsi];
    kain["warna"] = [...result.warna];
    return kain;
}
