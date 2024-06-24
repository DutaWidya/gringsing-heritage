import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

// pages
import Dashboard from "../pages/dashboard";
import About from "../pages/about";
import NotFound from "../pages/not-found";
import Galery from "../pages/galery";
import Details from "../pages/details";

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/galeri" element={<Galery />} />
                <Route path="/detail" element={<Details />} />
                <Route path="*" element={<NotFound />} />
            </Router>
        </BrowserRouter>
    );
};

export default Routes;
