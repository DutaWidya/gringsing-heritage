import { BaseLayout } from "../layouts";
import { Section, Card } from "../components";
import { Link } from "react-router-dom";

const datas = [
    {
        id: 1,
        imgUrl: "../assets/images/BG_3.webp",
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, est?",
    },
    {
        id: 2,
        imgUrl: "../assets/images/BG_3.webp",
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, est?",
    },
];

const Dashboard = () => {
    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center h-full  text-center">
                <div className="py-40 flex flex-col items-center">
                    <h1 className="font-ivyPresto uppercase text-6xl md:text-8xl">
                        Gringsing Heritage!
                    </h1>
                    <p className="max-w-[800px] text-center py-8">
                        Selamat datang di Gringsing Heritage, platform digital yang didedikasikan
                        untuk melestarikan keindahan dan warisan kain Gringsing Bali.
                    </p>
                </div>

                <Section title="section 1" number={1} />
                <div className="flex flex-col gap-6">
                    {datas.map((data) => (
                        <Card
                            key={data.id}
                            imgUrl={data.imgUrl}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>

                <Section title="section 2" number={2} />
                <div className="py-40 flex flex-col items-center">
                    <h1 className="font-ivyPresto uppercase text-6xl md:text-8xl">learn more!</h1>
                    <p className="max-w-[800px] text-center py-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem debitis
                        necessitatibus dolores modi blanditiis animi id fugiat explicabo voluptates
                        consequuntur saepe unde amet, qui aspernatur quasi sed nemo minus!
                        Excepturi.
                    </p>
                    <Link
                        to="/about"
                        className="box-border py-2 px-8 rounded-full bg-[#2d2824] text-white font-semibold hover:text-[#2d2824] border border-transparent hover:bg-transparent hover:border hover:border-[#2d2824] transition-all duration-300"
                    >
                        Let&apos;s get started
                    </Link>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Dashboard;
