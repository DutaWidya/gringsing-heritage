import { NavigationBar, Footer } from "../components";

export const BaseLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <NavigationBar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
};
