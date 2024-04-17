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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem debitis
                        necessitatibus dolores modi blanditiis animi id fugiat explicabo voluptates
                        consequuntur saepe unde amet, qui aspernatur quasi sed nemo minus!
                        Excepturi.
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
                        <Link></Link>
                    </p>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Dashboard;
