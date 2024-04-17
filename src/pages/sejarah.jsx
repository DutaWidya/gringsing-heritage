import { BaseLayout } from "../layouts";
import { Section } from "../components";

export const Sejarah = () => {
    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center h-full ">
                <div className="flex flex-col items-center justify-center py-40">
                    <h1 className="font-ivyPresto uppercase text-8xl">Sejarah</h1>
                    <p className="max-w-[800px] text-center py-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem debitis
                        necessitatibus dolores modi blanditiis animi id fugiat explicabo voluptates
                        consequuntur saepe unde amet, qui aspernatur quasi sed nemo minus!
                        Excepturi.
                    </p>
                </div>

                <Section title="Sebelum Kemerdekaan" number={1} />
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-ivyPresto uppercase text-4xl">Before Century</h2>
                    <p className="max-w-[800px] text-center py-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem debitis
                        necessitatibus dolores modi blanditiis animi id fugiat explicabo voluptates
                        consequuntur saepe unde amet, qui aspernatur quasi sed nemo minus!
                        Excepturi.
                    </p>
                </div>

                <Section title="Masa Awal Kemerdekaan" number={2} />
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-ivyPresto uppercase text-4xl">90&apos;s Century</h2>
                    <p className="max-w-[800px] text-center py-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem debitis
                        necessitatibus dolores modi blanditiis animi id fugiat explicabo voluptates
                        consequuntur saepe unde amet, qui aspernatur quasi sed nemo minus!
                        Excepturi.
                    </p>
                </div>

                <Section title="Era Sekarang" number={3} />
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-ivyPresto uppercase text-4xl">Todays Reality</h2>
                    <p className="max-w-[800px] text-center py-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem debitis
                        necessitatibus dolores modi blanditiis animi id fugiat explicabo voluptates
                        consequuntur saepe unde amet, qui aspernatur quasi sed nemo minus!
                        Excepturi.
                    </p>
                </div>
            </div>
        </BaseLayout>
    );
};
