import { BaseLayout } from "../layouts";
import { Section, Slider } from "../components";

const About = () => {
    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-ivyPresto uppercase text-8xl">About Gringsing</h1>
                <p>
                    Kami menampilkan berbagai motif ikonik yang mewakili budaya dan filosofi Bali,
                    serta galeri visual yang memukau untuk menggambarkan kain ini dalam berbagai
                    konteks dan aplikasi. Gringsing Heritage berfungsi sebagai sumber daya berharga
                    bagi peneliti, seniman, dan penggemar budaya untuk memperdalam pengetahuan
                    mereka dan mendukung pelestarian tradisi ini. Terlibatlah dengan kami untuk
                    menjaga keindahan kain Gringsing tetap hidup dan relevan bagi generasi
                    mendatang.
                </p>
                <Slider />
            </div>
        </BaseLayout>
    );
};

export default About;
