import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

// pages
import Dashboard from "../pages/dashboard";
import { Sejarah } from "../pages/sejarah";
import NotFound from "../pages/not-found";

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Dashboard />} />
                <Route path="/sejarah" element={<Sejarah />} />
                <Route path="*" element={<NotFound />} />
            </Router>
        </BrowserRouter>
    );
};

export default Routes;
