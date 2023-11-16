import Header from "./Component/Header";
import danang from "../../../public/da_nang.jpg";
import halong from "../../../public/ha_long.jpg";
import sapa from "../../../public/sa_pa.jpg";
import hochiminh from "../../../public/ho_chi_minh.jpg";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";


export default function BusesBooking() {
    return (
        <>
            <div className="">
                <Header />
            </div>
            <div className="">
                <div className="flex justify-center mt-10 font-bold text-2xl">
                    Where to go
                </div>
                <div className="flex justify-between mr-52 ml-52 mt-10">
                    <div className="">
                        <div className="absolute flex text-white m-2">
                            Vietnam
                        </div>
                        <img src={danang} alt="Vietnam"
                            className="w-52"
                        />
                        <div className="h-20 bg-slate-200 grid items-center justify-center">
                            <div>
                                Hanoi - Da nang
                            </div>
                            <div>
                                From 1.875.000 đ
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="absolute flex text-white m-2">
                            Vietnam
                        </div>
                        <img src={halong} alt=""
                            className="w-52"
                        />
                        <div className="h-20 bg-slate-200 grid items-center justify-center">
                            <div>
                                Hanoi - Halong Bay
                            </div>
                            <div>
                                From 1.875.000 đ
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="absolute flex text-white m-2">
                            Vietnam
                        </div>
                        <img src={sapa} alt=""
                            className="w-52"
                        />
                        <div className="h-20 bg-slate-200 grid items-center justify-center">
                            <div>
                                Hanoi - Sa pa
                            </div>
                            <div>
                                From 1.875.000 đ
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="absolute flex text-white m-2">
                            Vietnam
                        </div>
                        <img src={hochiminh} alt=""
                            className="w-52"
                        />
                        <div className="h-20 bg-slate-200 grid items-center justify-center">
                            <div>
                                Hanoi - Ho Chi Minh
                            </div>
                            <div>
                                From 1.875.000 đ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-52 mr-52 mt-10 bg-white shadow p-4">
                <div className="border-b-4 border-blue-500 mt-4 text-2xl font-bold text-cyan-400">
                    Popular Route in Thailand
                </div>
                <div className="flex justify-between">
                    <div className="grid">
                        <Link to="/test" className="mt-4">
                            Bangkok → Chiang Mai
                        </Link>
                        <div className="mt-4">
                            Bangkok → Phuket
                        </div>
                        <div className="mt-4">
                            Bangkok → Krabi
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Samui
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Phangan
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Tao
                        </div>
                    </div>
                    <div className="grid">
                        <div className="mt-4">
                            Bangkok → Chiang Mai
                        </div>
                        <div className="mt-4">
                            Bangkok → Phuket
                        </div>
                        <div className="mt-4">
                            Bangkok → Krabi
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Samui
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Phangan
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Tao
                        </div>
                    </div>
                    <div className="grid">
                        <div className="mt-4">
                            Bangkok → Chiang Mai
                        </div>
                        <div className="mt-4">
                            Bangkok → Phuket
                        </div>
                        <div className="mt-4">
                            Bangkok → Krabi
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Samui
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Phangan
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Tao
                        </div>
                    </div>
                    <div className="grid">
                        <div className="mt-4">
                            Bangkok → Chiang Mai
                        </div>
                        <div className="mt-4">
                            Bangkok → Phuket
                        </div>
                        <div className="mt-4">
                            Bangkok → Krabi
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Samui
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Phangan
                        </div>
                        <div className="mt-4">
                            Bangkok → Koh Tao
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}