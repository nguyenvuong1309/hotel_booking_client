import Featured from "./components/Featured";
import CardLineChart from "./components/chart";
import Sidebar from "./components/sidebar";
import Navbar from "./navbar/Navbar";
import Widget from "./widget/Widget";





export default function AdminPage() {
    return (
        <div className="grid">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="w-full">
                    <div className="flex justify-around bg-slate-300 w-full h-60 py-10 m-0 p-0">
                        <Widget type="user" />
                        <Widget type="order" />
                        <Widget type="earning" />
                        <Widget type="balance" />
                    </div>
                    <div className="flex">
                        <div className="bg-green-100 p-0 w-4/12 m-10 h-7/12 rounded-2xl">
                            <Featured />
                        </div>
                        <div className="flex mt-10 w-7/12 h-7/12">
                            <CardLineChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}