import { NavigationBar, Footer } from "../components";

export const BaseLayout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <main>{children}</main>
            <Footer />
        </>
    );
};
