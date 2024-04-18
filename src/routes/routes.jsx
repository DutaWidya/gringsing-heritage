import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

// pages
import Dashboard from "../pages/dashboard";
import About from "../pages/about";
import NotFound from "../pages/not-found";

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Dashboard />} />
                <Route path="/About" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Router>
        </BrowserRouter>
    );
};

export default Routes;
