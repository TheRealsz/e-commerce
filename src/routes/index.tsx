import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ScrollToTop from "../components/ScrollToTop";

export function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}