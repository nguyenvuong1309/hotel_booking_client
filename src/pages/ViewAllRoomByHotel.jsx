import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";







const ViewAllRoomByHotel = () => {
    const { idHotel } = useParams();
    const [hotelRooms, setHotelRooms] = useState(null);
    useEffect(() => {
        axios.get(`/rooms`).then(response => {
            setHotelRooms(response.data.filter(item => item.fields.hotelId === idHotel))
        })
    }, [])
    return (
        <div className="flex justify-center">
            <div className="w-11/12">
                <div className="flex justify-center mb-10">
                    <Link to={`/room/add-the-new-room/${idHotel}`} className="">
                        <button className="truncate bg-red-500 px-4 py-2 rounded-3xl">Add the new room</button>
                    </Link>
                </div>
                <div className="grid justify-center items-center grid-cols-[1fr_1fr_1fr_1fr] gap-10
                max-[500px]:grid-cols-[1fr]
                ">
                    {hotelRooms && hotelRooms?.length > 0 && hotelRooms.map((item) => (
                        <Link to={`/places/allRoom/${idHotel}/${item?._id}`}>
                            <div className="flex justify-center items-center bg-slate-300 p-2 rounded-xl">
                                <div className=" w-full mb-10">
                                    <div>
                                        <img src={item?.fields?.images?.[0]?.fields?.file?.url} alt="" className="rounded-xl overflow-hidden" />
                                    </div>
                                    <div className="grid justify-center mt-5">
                                        <div>
                                            <div className="truncate">{item?.fields?.slug}</div>
                                        </div>
                                        <div>
                                            <div>{`Price : ${item?.fields?.price}`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewAllRoomByHotel;