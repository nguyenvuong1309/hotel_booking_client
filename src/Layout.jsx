import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        <div className="p-4 px-8 flex flex-col min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}