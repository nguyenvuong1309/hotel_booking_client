







import Header from "./Component/Header";
import Footer from "../../components/Footer";
import MyGallery from "./Component/MyGallery";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
    faBus,
    faRoute,
    faHourglassStart,
    faHourglassEnd
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../context/UserContext";
import { ca } from "date-fns/locale";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";


function MyBookingPage() {
    const user = useContext(UserContext);
    const [bookingCarData, setBookingCarData] = useState(null)
    useEffect(() => {
        axios.get("/bookingCar").then((response) => {
            let temp = response?.data.filter((item) => item?.userId === user?.user?._id)
            setBookingCarData(temp)
        })
    }, [user])

    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="w-11/12 grid grid-cols-[1fr_1fr_1fr_1fr]
           max-[500px]:grid
           max-[500px]:grid-cols-1
           ">
                    <div className="flex justify-center font-bold">My booking page</div>
                    <div>
                        {bookingCarData && bookingCarData?.length > 0 && bookingCarData.map((item, index) => (
                            <div className="flex mt-10 bg-slate-200" key={index} >
                                <div className="flex w-1/2">
                                    <img src={item?.images?.[0]} alt="" className="w-full" />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <div>{`From : ${item?.from}`}</div>
                                    <div>{`To : ${item?.to}`}</div>
                                    <div>{`Price : ${item?.price}`}</div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyBookingPage