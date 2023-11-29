import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import { differenceInCalendarDays, format } from "date-fns";
import { Link } from "react-router-dom";
import BookingDate from "../BookingDate";
import moment from "moment";



export default function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    const [bookingRoom, setBookingRoom] = useState([]);
    useEffect(() => {
        axios.get('/bookings', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        },).then(response => {
            setBookings(response.data);
        });
        axios.get('/hotelRoomBooking', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        },).then(response => {
            console.log("🚀 ~ file: BookingsPage.jsx:29 ~ useEffect ~ response:", response)
            setBookingRoom(response.data.slice(0).reverse());
        });
    }, [])
    return (
        <div>
            <AccountNav />
            {/* <div>
                {bookings?.length > 0 && bookings.map(booking => (
                    <Link to={`/account/bookings/${booking._id}`} className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden" key={booking._id}>
                        <div className="w-48">
                            <PlaceImg place={booking.place} />
                        </div>
                        <div className="py-3 pr-3  grow">
                            <h2 className="text-xl">{booking.place.title}</h2>
                            <div className="text-xl">
                                <BookingDate booking={booking} />
                                <div className="flex gap-1 text-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                    </svg>
                                    <span className="text-2xl">
                                        Total price : ${booking.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div> */}
            <div className="mt-10">
                {bookingRoom?.length > 0 && bookingRoom.map(item => (
                    <Link to={`/account/bookings/${item?._id}`}>
                        <div className="flex justify-center items-center h-fit mb-10" key={item?._id}>
                            <div className="w-10/12 bg-slate-100 flex
                            max-[500px]:grid
                            max-[500px]:text-[10px]
                            max-[500px]:w-11/12
                            ">
                                <div className="w-1/3
                                max-[500px]:w-full
                                ">
                                    <img src={item?.hotelRoom?.fields?.images?.[0]?.fields?.file?.url} alt="w-full" />
                                </div>
                                <div className="ml-10 grid  items-center  w-2/3
                                max-[500px]:ml-0
                                max-[500px]:w-full
                                max-[500px]:p-2
                                ">
                                    <div className="text-2xl flex justify-start
                                    max-[400px]:text-[13px]
                                    max-[400px]:font-medium
                                    ">
                                        <div className="flex justify-start">Hotel name : </div>
                                        <div className="truncate">  {item?.hotelName}</div>
                                    </div>
                                    <div className="text-md flex
                                      max-[400px]:text-[12px]
                                      max-[400px]:font-medium
                                    ">
                                        <div>Address : </div>
                                        <div>  {item?.hotelAddress}</div>
                                    </div>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>
                                        {` ${moment(item?.checkOut).diff(moment(item?.checkIn), 'days')} Nights : `}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>
                                        {`${moment(item?.checkIn).format("D-M-YYYY")} -> `}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>
                                        {`${moment(item?.checkOut).format("D-M-YYYY")}`}

                                    </div>
                                    <div className="flex font-extralight text-sm">
                                        <div>Type : </div>
                                        <div>
                                            {item?.hotelRoom?.fields?.slug}
                                        </div>
                                    </div>
                                    <div>
                                        {/* <BookingDate booking={bookingRoom} /> */}
                                    </div>
                                    <div className="gap-1 text-xl flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>
                                        <span className="text-2xl
                                         max-[500px]:text-[14px]
                                        ">
                                            Total price : ${item?.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    );
}