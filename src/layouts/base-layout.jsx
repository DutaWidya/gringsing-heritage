import { NavigationBar, Footer } from "../components";

export const BaseLayout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <main className="container mx-auto px-4 md:px-8 py-4 mt-[90px]">{children}</main>
            <Footer />
        </>
    );
};
