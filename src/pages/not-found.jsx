import { BaseLayout } from "../layouts";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <BaseLayout>
            <div className="flex flex-col items-center justify-center h-full py-40">
                <h1 className="font-ivyPresto uppercase text-8xl">Not Found</h1>
                <p className="max-w-[800px] text-center py-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem debitis
                    necessitatibus dolores modi blanditiis animi id fugiat explicabo voluptates
                    consequuntur saepe unde amet, qui aspernatur quasi sed nemo minus! Excepturi.
                </p>
                <Link
                    to="/"
                    className="box-border py-2 px-8 rounded-full bg-[#2d2824] text-white font-semibold hover:text-[#2d2824] border border-transparent hover:bg-transparent hover:border hover:border-[#2d2824] transition-all duration-300"
                >
                    Dashboard
                </Link>
            </div>
        </BaseLayout>
    );
};

export default NotFound;
