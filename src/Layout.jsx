import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./components/Footer";
import PropertyList from "./components/PropertyList";
import Featured from "./components/Feature";

export default function Layout() {
    return (
        <div className="p-4 px-8 flex flex-col min-h-screen">
            <Header />
            <div>
                <Featured />
            </div>
            <div className="ml-40 mr-40">
                <div className="text-xl font-bold mb-4">Browse by property</div>
                <PropertyList />
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}