import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import BookingDate from "../BookingDate";
import moment from "moment";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function BookingPage() {
    const location = useLocation();
    // console.log("🚀 ~ file: BookingPage.jsx:14 ~ BookingPage ~ location:", location.state.hotelRoomInfo.hotelRoom)
    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    const [hotelRoom, setHotelRoom] = useState(null);
    console.log("🚀 ~ file: BookingPage.jsx:18 ~ BookingPage ~ hotelRoom:", hotelRoom?.fields?.policyCancelBooking)
    console.log(moment(booking?.checkIn).diff(moment(new Date()), 'days'))
    useEffect(() => {
        if (id) {
            axios.get(`/hotelRoomBooking/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            },).then(response => {
                const foundBoking = response.data.find(({ _id }) => _id === id)
                if (foundBoking) {
                    setBooking(foundBoking);
                }
                setHotelRoom(location?.state?.hotelRoomInfo?.hotelRoom)
            })
        }
    }, [])
    if (!booking) {
        return '';
    }

    const cancelBooking = async () => {
        try {
            await axios.delete(`/hotelRoomBooking/${booking._id}`)
            toast.success("success cancel booking this hotel")
        }
        catch (err) {
            toast.error("some error occur while you cancel booking this hotel");
        }
    }
    return (
        <div className="flex justify-center items-center">
            <div className="w-11/12">
                <div className="my-8">
                    <h1 className="text-3xl">{booking?.hotelId?.title}</h1>
                    <AddressLink className="my-2 block">{booking?.hotelId?.address}</AddressLink>
                    <div className="bg-gray-200 p-6 mb-6 rounded-2xl flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl mb-4">Your booking information </h2>
                            <BookingDate booking={booking} />
                        </div>
                        <div className="bg-primary p-4 text-white rounded-2xl">
                            <div>Total price</div>
                            <div className="text-3xl">${booking?.price}</div>
                        </div>
                    </div>
                    <div>

                    </div>
                    {/* <PlaceGallery place={booking?.hotelId} /> */}
                    <div className="flex justify-center">
                        {
                            moment(booking?.checkIn).diff(moment(new Date()), 'days') > hotelRoom?.fields?.policyCancelBooking ? (
                                <button className="px-5 py-2 rounded-3xl bg-red-500 font-thin text-white" onClick={cancelBooking}>
                                    Cancel booking
                                </button>
                            ) : (
                                <div className="flex justify-center bg-red-400 px-4 py-2 rounded-3xl">
                                    You cannot cancel booking because of hotel policy
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}