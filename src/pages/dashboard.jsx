import { BaseLayout } from "../layouts";
import { Section, Card, FilterSelect } from "../components";
import { Link } from "react-router-dom";
import { BG_3 } from "../assets/images";

const datas = [
    {
        id: 1,
        imgUrl: BG_3,
        title: "Lorem Ipsum",
        subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, est?",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe unde natus nihil inventore quo id consequatur totam ipsa quae, commodi repudiandae tempora ratione ut? Delectus molestias dignissimos commodi culpa quae!",
    },
    {
        id: 2,
        imgUrl: BG_3,
        title: "Lorem Ipsum",
        subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, est?",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tenetur delectus eius iure dolorum. Ducimus quos maiores minima perferendis beatae eos, debitis sed! Minima inventore officiis optio eum veritatis tempora?",
    },
    {
        id: 3,
        imgUrl: BG_3,
        title: "Lorem Ipsum",
        subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, est?",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe unde natus nihil inventore quo id consequatur totam ipsa quae, commodi repudiandae tempora ratione ut? Delectus molestias dignissimos commodi culpa quae!",
    },
    {
        id: 4,
        imgUrl: BG_3,
        title: "Lorem Ipsum",
        subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, est?",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tenetur delectus eius iure dolorum. Ducimus quos maiores minima perferendis beatae eos, debitis sed! Minima inventore officiis optio eum veritatis tempora?",
    },
];

const Dashboard = () => {
    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="py-40 flex flex-col items-center">
                    <h1 className="font-ivyPresto uppercase text-6xl md:text-8xl">
                        Gringsing Heritage!
                    </h1>
                    <p className="max-w-[800px] text-center py-8 text-xl ">
                        Selamat datang di Gringsing Heritage, platform digital yang didedikasikan
                        untuk melestarikan keindahan dan warisan kain Gringsing Bali.
                    </p>
                </div>

                <Section title="section 1" number={1} />
                <div className="flex flex-col gap-6">
                    <h1 className="font-ivyPresto uppercase text-6xl md:text-8xl">
                        Let&apos;s explore
                    </h1>

                    {/* filtering here */}
                    <div className="grid md:grid-cols-3 gap-3 text-left border p-3">
                        <FilterSelect />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {datas.map((data) => (
                            <Card
                                key={data.id}
                                imgUrl={data.imgUrl}
                                title={data.title}
                                subtitle={data.subtitle}
                                description={data.description}
                            />
                        ))}
                    </div>
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
