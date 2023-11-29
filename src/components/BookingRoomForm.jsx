import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";
import Comments from "./CommentSection/Comments";
//import Comments from "../components/CommentSection/Comments";



const BookingRoomForm = () => {

    const { id } = useParams();
    const [hotelRoom, setHotelRoom] = useState(null);
    console.log("🚀 ~ file: BookingRoomForm.jsx:16 ~ BookingRoomForm ~ hotelRoom:", hotelRoom)
    const [hotel, setHotel] = useState(null);
    console.log("🚀 ~ file: BookingRoomForm.jsx:18 ~ BookingRoomForm ~ hotel:", hotel)
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/rooms/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        },).then(response => {
            console.log("🚀 ~ file: BookingRoomForm.jsx:27 ~ useEffect ~ response:", response)
            setHotelRoom(response.data);
            axios.get(`/hotels/${response?.data?.fields?.hotelId} `).then(res => {
                return setHotel(res.data);
            })

        });


    }, [id])
    if (!hotelRoom) return '';

    return (
        <div className="mt-4 bg-gray-100  px-8 pt-8">
            <h1 className="text-3xl">{hotelRoom?.title}</h1>
            {/* <AddressLink children={hotelRoom?.address} />
            <PlaceGallery hotelRoom={hotelRoom} /> */}
            <div>
                <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
                    <div>
                        <div className="my-4">
                            <h2 className="font-semibold text-2xl">Description</h2>
                            {hotelRoom?.fields?.description}
                        </div>
                        Check-in: {hotelRoom?.checkIn}<br />
                        Check-out: {hotelRoom?.checkOut}<br />
                        Max number of guests : {hotelRoom?.maxGuests}
                    </div>
                    <div>
                        <BookingWidget data={{ hotel: hotel?.[0], hotelRoom: hotelRoom }} />
                    </div>
                </div>
                <div className="bg-white -mx-8 px-8 py-8 border-t">
                    <div>
                        <h2 className="font-semibold text-2xl">Extra info</h2>
                    </div>
                    <div className="mb-4 mt-1 text-sm text-gray-700 leading-5">{hotelRoom?.extraInfo}</div>
                </div>
                <Comments />
            </div>
        </div>
    )
}

export default BookingRoomForm;