




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
import { useNavigate } from 'react-router-dom';


function DetailBusesBooking() {
    const [cars, setCars] = useState(null);
    const { user } = useContext(UserContext);
    const [redirect, setRedirect] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/cars').then((response) => {
            setCars(response.data);
        });
    }, [])

    const bookCar = async (car) => {
        if (user?._id) {
            if (car.numberRemain > 0) {
                const data = {
                    userId: user._id,
                    carId: car._id,
                    from: car.from,
                    to: car.to,
                    departureTime: car.departureTime,
                    estimatedTimeOfArrival: car.estimatedTimeOfArrival,
                    price: car.price,
                    images: car.images
                }
                await axios.post('/createBookingCar', data);

                const infoUpdateCar = {
                    name: car.name,
                    from: car.from,
                    to: car.to,
                    departureTime: car.departureTime,
                    estimatedTimeOfArrival: car.estimatedTimeOfArrival,
                    numberRemain: car.numberRemain - 1,
                    price: car.price,
                    images: car.images,
                    description: car.description
                }
                await axios.put(`/cars/${car._id}`, infoUpdateCar);
                navigate("/booking-car");

            }
            else {
                toast.error("Sorry but this car now don't have seat available");
            }
        } else {
            toast.error("You need to login to book car");
            setRedirect(`/login`)
            return <Navigate to={'/'} />
        }
    }
    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="w-11/12 grid grid-cols-[1fr_1fr_1fr_1fr]
                max-[500px]:grid
                max-[500px]:grid-cols-1
                ">
                    {cars && cars.map((item) => (
                        <div className="m-5    bg-slate-300">
                            <div className="flex justify-center items-center">
                                <div className="m-2">
                                    <img src={item?.images?.[0]} alt="" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <div>
                                    {`Name : ${item?.name}`}
                                </div>
                                <div>
                                    {`From : ${item?.from}`}
                                </div>
                                <div>
                                    {`To : ${item?.to}`}
                                </div>
                                <div>
                                    {`Price : ${item?.price}`}
                                </div>
                                <div>
                                    {`Number seat remain : ${item?.numberRemain}`}
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="bg-red-500 w-3/12 rounded-xl flex justify-center my-4">
                                    <button className=" bg-red-500" onClick={(ev) => { bookCar(item) }}>
                                        Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <Footer />
        </>

    )
}

export default DetailBusesBooking