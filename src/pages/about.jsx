import { BaseLayout } from "../layouts";
import { Section, Slider } from "../components";

const About = () => {
    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center md:py-20 gap-3">
                <h1 className="md:max-w-[70%] lg-max-w-[80%] text-center font-ivyPresto uppercase text-5xl md:text-8xl my-5">
                    About Gringsing
                </h1>
                <p className="md:max-w-[80%] lg:max-w-[60%] text-xl indent-8 text-justify">
                    Selamat datang di halaman "About" Gringsing Heritage, tempat di mana kami
                    menjelajahi perjalanan luar biasa kain Gringsing dari masa lalu, hingga masa
                    kini, dan visi kami untuk masa depannya. Kami mengundang Anda untuk
                    mengeksplorasi sejarah yang kaya, perkembangan yang menarik, serta inovasi yang
                    akan datang dari kain Gringsing.
                </p>
                <p className="md:max-w-[80%] lg:max-w-[60%] text-xl indent-8 text-justify">
                    Dapatkan wawasan mendalam tentang proses pembuatannya yang penuh dengan keahlian
                    dan dedikasi, serta makna filosofis di balik motif dan warnanya yang memikat.
                    Halaman ini adalah jendela ke dunia magis kain Gringsing, di mana masa lalu
                    bertemu dengan masa kini, dan inspirasi bertemu dengan imajinasi. Selamat
                    menikmati petualangan Anda!
                </p>
            </div>

            <Section number={1} title="Sejarah & Perkembangan" />
            <div className="flex flex-col items-center justify-center md:py-20 gap-3">
                <h1 className="md:max-w-[70%] lg-max-w-[80%] text-center font-ivyPresto uppercase text-5xl md:text-8xl my-5">
                    Sejarah & Perkembangan
                </h1>
                <div className="md:max-w-[80%] lg:max-w-[70%] flex flex-col gap-3 mb-3">
                    <h2 className="text-left self-start font-medium text-2xl">
                        1. Sejarah Kain Gringsing
                    </h2>
                    <p className="text-xl indent-8 text-justify">
                        Kain Gringsing memiliki sejarah yang kaya dan dipenuhi dengan mitos yang
                        menghubungkannya dengan dewa-dewa dan tradisi spiritual masyarakat Bali.
                        Menurut legenda yang berkembang, Dewa Indra terpesona oleh keindahan langit
                        malam, termasuk bintang, bulan, dan matahari, yang kemudian menginspirasi
                        pembuatan kain ini.
                    </p>
                    <p className="text-xl indent-8 text-justify">
                        Dewa Indra memilih masyarakat Tenganan untuk menerima pengetahuan tentang
                        teknik menenun yang rumit dan melukiskan keindahan alam tersebut. Dengan
                        petunjuk Dewa Indra, para perajin wanita di Tenganan menguasai teknik ikat
                        ganda yang menghasilkan kain dengan motif-motif indah yang merefleksikan
                        keajaiban langit malam. Kain Gringsing telah menjadi simbol warisan budaya
                        Bali yang kuat, memainkan peran penting dalam upacara adat dan tradisi yang
                        dilestarikan oleh masyarakat Tenganan hingga saat ini.
                    </p>
                </div>
                <div className="md:max-w-[80%] lg:max-w-[70%] flex flex-col gap-3 mb-3">
                    <h2 className="text-left self-start font-medium text-2xl">
                        2. Perkembangan Kain Gringsing Saat Ini
                    </h2>
                    <p className="text-xl indent-8 text-justify">
                        Kain Gringsing terus berkembang dan tetap relevan di era modern dengan
                        mempertahankan teknik pembuatan tradisional yang unik. Masyarakat Tenganan
                        masih mempraktekkan metode pembuatan kain yang telah diwariskan secara
                        turun-temurun, termasuk teknik ikat ganda yang rumit dan penggunaan pewarna
                        alami yang diambil dari bahan-bahan lokal. Kain ini dikenal dengan
                        motif-motif khas yang mencerminkan keindahan alam dan budaya Bali. Walaupun
                        desainnya tetap mempertahankan keaslian tradisional, kain Gringsing telah
                        mendapatkan pengakuan internasional atas kualitas dan keindahannya, menarik
                        perhatian para kolektor seni dan penikmat budaya di seluruh dunia.
                    </p>
                    <p className="text-xl indent-8 text-justify">
                        Pemasaran digital dan platform online telah membuka peluang bagi perajin
                        untuk mempromosikan kain Gringsing secara global, sekaligus meningkatkan
                        apresiasi masyarakat terhadap warisan budaya ini. Kain Gringsing tetap
                        menjadi lambang warisan budaya yang penting dan terus dilestarikan oleh
                        masyarakat Bali.
                    </p>
                </div>
                <div className="md:max-w-[80%] lg:max-w-[70%] flex flex-col gap-3 mb-3">
                    <h2 className="text-left self-start font-medium text-2xl">
                        3. Penggunaan Kontemporer dan Inovasi untuk Melestarikan Kain Gringsing di
                        Masa Depan
                    </h2>
                    <p className="text-xl indent-8 text-justify">
                        Kain Gringsing saat ini telah diadaptasi untuk berbagai penggunaan
                        kontemporer dan inovasi yang menggabungkan tradisi dengan elemen modern.
                        Dalam dunia fashion, kain Gringsing digunakan untuk membuat pakaian,
                        aksesori, dan perhiasan yang menggabungkan motif tradisional dengan gaya
                        terkini. Kain ini juga banyak digunakan dalam dekorasi rumah, seperti tirai,
                        taplak meja, bantal, dan elemen dekoratif lainnya, memberikan sentuhan
                        budaya Bali pada desain interior modern.
                    </p>
                    <p className="text-xl indent-8 text-justify">
                        Selain itu, kain Gringsing telah digunakan dalam pengembangan produk baru,
                        seperti tas, dompet, atau kerajinan tangan, yang memadukan teknik
                        tradisional dengan desain modern. Upaya untuk meningkatkan kualitas dan daya
                        saing kain Gringsing terus dilakukan, termasuk penggunaan pewarna alami
                        ramah lingkungan dan peningkatan presisi dalam tenun. Strategi branding dan
                        pemasaran digital juga membantu memperluas jangkauan kain Gringsing ke pasar
                        internasional, mendukung kelestariannya di masa depan.
                    </p>
                </div>
            </div>

            <Section number={2} title="Teknik Pembuatan Kain Gringsing" />
            <div className="flex flex-col items-center justify-center md:py-20 gap-3">
                <h1 className="md:max-w-[70%] lg-max-w-[80%] text-center font-ivyPresto uppercase text-5xl md:text-8xl my-5">
                    Pembuatan Kain Gringsing
                </h1>

                <div className="md:max-w-[80%] lg:max-w-[70%] flex flex-col gap-3 mb-3">
                    <p className="text-xl indent-8 text-justify">
                        Proses pembuatan kain Gringsing merupakan upaya yang membutuhkan waktu dan
                        ketelitian tinggi. Penenunan kain ini dapat memakan waktu hingga dua bulan,
                        sedangkan motif dobel ikat bisa memakan waktu hingga dua hingga lima tahun.
                        Tidak seperti tenun biasa, teknik dobel ikat mengharuskan benang lungsi
                        (memanjang ke arah panjang kain) dan pakan (memanjang ke arah lebar kain)
                        diikat terlebih dahulu sebelum pewarnaan dimulai.
                    </p>
                    <p className="text-xl indent-8 text-justify">
                        Semua proses pengerjaan dilakukan secara manual, dengan bantuan alat tenun
                        tradisional seperti gedogan atau Alat Tenun Bukan Mesin (ATBM) yang
                        digunakan untuk merentangkan, menahan, dan merapikan benang yang ditenun.
                        Penenunan dilakukan sambil duduk bersila atau meluruskan kaki di lantai.
                    </p>
                    <p className="text-xl indent-8 text-justify">
                        Kain Gringsing dibuat menggunakan teknik tenun ikat, yang membutuhkan
                        keterampilan dan presisi tinggi. Proses dimulai dengan pemintalan benang
                        secara tradisional menggunakan tangan. Benang berasal dari tanaman kapuk
                        berbiji satu yang hanya tumbuh di Nusa Penida.
                    </p>

                    {/* Insert Image ATBM Here  */}
                    <img src="#" alt="Alat tenun bukan mesin" className="self-center" />

                    <p className="text-xl indent-8 text-justify">
                        Setelah pemintalan selesai, benang direndam dalam minyak kemiri yang
                        diperoleh dari hutan Tenganan. Buah kemiri dipilih yang telah matang dan
                        jatuh sendiri dari pohonnya. Proses perendaman berlangsung antara 40 hari
                        hingga satu tahun, membantu penetrasi warna, menambahkan kilau, melembutkan
                        benang, dan melindungi serat dari kerusakan.
                    </p>
                    <p className="text-xl indent-8 text-justify">
                        Air rendaman diganti setiap 25 hingga 49 hari, dan setelah direndam, benang
                        dikeringkan secara alami dengan angin. Benang kering kemudian diikat untuk
                        membentuk pola motif menggunakan tali rafia, menciptakan dua warna motif
                        yang berbeda. Kain Gringsing umumnya memiliki tiga warna; dua warna motif
                        dan satu warna dasar.
                    </p>
                    <p className="text-xl indent-8 text-justify">
                        Kain yang diikat dicelup ke dalam warna biru, sebagai warna dasar, yang
                        diperoleh dari tape, pisang, dan daun taum (indigo). Karena tradisi,
                        pencelupan biru hanya dilakukan di Desa Bugbug. Setelah kering, kain dikirim
                        kembali ke desa asalnya, lalu beberapa ikatan dibuka untuk pewarnaan
                        selanjutnya.
                    </p>
                    <p className="text-xl indent-8 text-justify">
                        Kain kemudian dicelup ke dalam warna merah yang diambil dari kulit akar
                        mengkudu. Pencelupan berlangsung sekitar 3 hari, dan diulang hingga warna
                        merah yang diinginkan tercapai. Proses ini dapat memakan waktu beberapa
                        bulan, mengubah warna dasar biru menjadi hitam setelah bersentuhan dengan
                        merah.
                    </p>

                    {/* Insert Image Pencelupan Here  */}
                    <img src="#" alt="Hasil pewarnaan pertama" className="self-center" />

                    <p className="text-xl indent-8 text-justify">
                        Setelah merah dicapai, ikatan terakhir dilepas untuk memberikan warna kuning
                        dari minyak kemiri. Jika warna-warna yang diinginkan telah tercapai, benang
                        direndam dalam air nasi untuk meningkatkan kekuatan, kemudian dikeringkan
                        dan siap ditenun. Benang diatur dan ditenun dengan hati-hati menggunakan
                        alat tenun tradisional hingga menjadi kain Gringsing yang indah.
                    </p>

                    {/* Insert Image Pencelupan Here  */}
                    <img src="#" alt="Alat tenun tradisional" className="self-center" />
                </div>

                <Section number={3} title="Warna & Motif Kain Gringsing" />
                <div className="flex flex-col items-center justify-center md:py-20 gap-3">
                    <h1 className="md:max-w-[70%] lg-max-w-[80%] text-center font-ivyPresto uppercase text-5xl md:text-8xl my-5">
                        Warna & Motif Kain Gringsing
                    </h1>

                    <div className="md:max-w-[80%] lg:max-w-[70%] flex flex-col gap-3 mb-3">
                        <p className="text-xl indent-8 text-justify">
                            Warna tenun Gringsing hanya terdiri dari tiga, yaitu merah, kuning, dan
                            hitam. Warna merah melambangkan elemen api, kuning mewakili unsur udara,
                            dan hitam menggambarkan elemen air. Kombinasi ini dikenal sebagai konsep
                            tridatu, simbol keseimbangan tiga elemen penting dalam kehidupan yang
                            harus senantiasa dijaga.
                        </p>
                        <p className="text-xl indent-8 text-justify">
                            Selain proses pewarnaan yang memerlukan waktu bertahun-tahun, motif
                            tenun Gringsing juga sangat menarik dan penuh makna. Motif-motif
                            tersebut merepresentasikan harmoni antara manusia dengan sesama manusia,
                            alam, dan Tuhan. Enam Jenis motif Gringsing yang telah diwariskan secara
                            turun-temurun adalah:
                        </p>
                        <ol className="list-decimal list-inside text-left self-start font-medium text-2xl pl-8 flex flex-col gap-2">
                            <li>
                                Jenis Motif mengenai Konsep Dunia (Bhuana)
                                <p className="text-xl text-justify font-normal">
                                    Konsep Dunia digambarkan dengan penggambaran daerah perumahan
                                    atau pemukiman Desa Tenganan berbentuk kotak dengan busur di
                                    setiap sisi. Motif seperti ini biasanya diletakkan di bagian
                                    tengah bentuk seperti bintang, yang menunjukkan desa Tenganan
                                    sebagai pusat dunia.
                                </p>
                            </li>
                            <li>
                                Jenis Motif Floral
                                <p className="text-xl text-justify font-normal">
                                    Merupakan motif yang simetris dibelah seperti cempaka bunga,
                                    sayuran, dan buah buahan seperti Paré (pare atau Momordica
                                    charantia) dan terong.
                                </p>
                            </li>
                            <li>
                                Jenis Motif dengan Konsep Keseimbangan Kehidupan
                                <p className="text-xl text-justify font-normal">
                                    Konsep keseimbangan kehidupan disajikan dalam bentuk tanda-tanda
                                    salib, bintang, dan matahari sebagai makrokosmos. Motif kain
                                    tenun gringsing dipercaya memiliki kekuatan magis, yakni
                                    digunakan sebagai tolak bala. Motif ini terinspirasi dari langit
                                    yang dipenuhi bintang. Simbol pada kain gringsing ini dikerjakan
                                    dengan melantunkan doa dan menghiasinya dengan penggalan kata
                                    maupun kalimat doa sebagai ragam hias. Tujuannya, agar yang
                                    mengenakan kain diberikan kesehatan, keselamatan, dan dilindungi
                                    dari mara bahaya.
                                </p>
                            </li>
                            <li>
                                Jenis Motif Pertahanan
                                <p className="text-xl text-justify font-normal">
                                    Motif ini dilambangkan dengan taring anjing, barong (singa
                                    seperti Raja dari simbol kebaikan dalam mitologi Bali) gigi, dan
                                    kalajengking. Motif kalajengking yang ada pada kain gringsing
                                    berbentuk sama dengan bentuk kalajengking aslinya. Motif
                                    kalajengking memiliki arti dan makna bagi masyarakat Bali Aga.
                                </p>
                            </li>
                            <li>
                                Jenis Motif geometris (Sanan Empeg)
                                <p className="text-xl text-justify font-normal">
                                    Bentuk geometris seperti belah ketupat, segi empat/persegi,
                                    segi-banyak bergerigi yang dikembangkan dari bangun segi empat
                                    merupakan bentuk yang banyak dikembangkan dalam tenun Gringsing.
                                </p>
                            </li>
                            <li>
                                Jenis Motif Wayang
                                <p className="text-xl text-justify font-normal">
                                    Motif kain tenun gringsing wayang memiliki motif yang lebih
                                    rumit, namun dengan komposisi bentuk dan warna yang dapat
                                    dikatakan sempurna. Penggambaran tokoh-tokoh wayang ini tidak
                                    hanya indah secara visual, tetapi juga memiliki makna filosofis
                                    yang mendalam.
                                </p>
                            </li>
                        </ol>
                        <p className="text-xl indent-8 text-justify">
                            Bagi masyarakat setempat, kain Gringsing menjadi keharusan untuk
                            dimiliki. Kaum wanita menggunakan kain ini sebagai senteng atau
                            selendang, sedangkan kaum pria memakainya sebagai ikat pinggang. Kain
                            Gringsing merupakan bagian dari setiap acara penting dan upacara adat.
                        </p>
                    </div>
                </div>
            </div>
            {/* <Slider /> */}
        </BaseLayout>
    );
};

export default About;
