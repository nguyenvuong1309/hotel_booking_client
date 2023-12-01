
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const ViewAndEditRoomByHotel = () => {
    const { idHotelRoom } = useParams();
    const [room, setRoom] = useState(null);
    console.log("🚀 ~ file: ViewAndEditRoomByHotel.jsx:13 ~ ViewAndEditRoomByHotel ~ room:", room)
    const [isEditPage, setIsEditPage] = useState(true);

    useEffect(() => {
        axios.get(`/rooms/${idHotelRoom}`).then(reponse => {
            setRoom(reponse.data);
        })
    }, [])
    const OnChangeExtra = (texts) => {
        let array = texts.split(',');
        setRoom(
            {
                ...room,
                fields: {
                    ...room.fields,
                    extras: array
                }
            }
            //  { ...room.fields, extras: array }
        )
        console.log(array)
    }

    const updateInfoRoom = () => {
        // const dataRoomUpdate = {
        //     sys: {
        //         id: room.sys.id,
        //     },
        //     fields: {
        //         name: room.fields.name,
        //         hotelId: room.fields.hotelId,
        //         slug: room.fields.slug,
        //         type: room.fields.type,
        //         price: room.fields.price,
        //         size: room.fields.size,
        //         capacity: room.fields.capacity,
        //         pets: room.fields.pets,
        //         breakfast: room.fields.breakfast,
        //         featured: room.fields.featured,
        //         description: room.fields.description,
        //         extras: room.fields.extras,
        //         images: room.fields.images,
        //         policyCancelBooking: room.fields.policyCancelBooking,
        //         numberOfRemainRoom: room.fields.numberOfRemainRoom,
        //     }
        // }
        axios.put(`/rooms/${idHotelRoom}`, room).then(reponse => (
            setIsEditPage(!isEditPage)
        ))
    }

    return (
        <div>
            <div className="flex justify-center font-bold text-2xl">Room Hotel</div>
            <div>
                <section className="">
                    <div className="flex justify-around
            max-[500px]:grid
            max-[500px]:grid-cols-1
            max-[500px]:justify-center
            ">
                        {room?.fields?.images.map((item, index) => (
                            <div className="w-full flex justify-center">
                                <img key={index} src={item?.fields?.file?.url} alt={room?.name} className="w-3/4 
                    max-[500px]:w-11/12 
                    max-[500px]:mb-10
                    "/>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="w-11/12">
                            <div className="single-room-info">
                                <article className="desc">
                                    <h3 className="font-bold">details</h3>
                                    {isEditPage ? (
                                        <textarea value={room?.fields?.description}
                                            onChange={(ev) => setRoom(
                                                {
                                                    ...room,
                                                    fields: {
                                                        ...room.fields,
                                                        description: ev.target.value
                                                    }
                                                }
                                            )}
                                        />
                                    ) : (
                                        <p className="ml-3">{room?.fields?.description}</p>
                                    )}
                                </article>
                                <article className="info">
                                    <h3 className="font-bold">info</h3>
                                    <div className="ml-3">
                                        {isEditPage ? (
                                            <div className="flex">
                                                <div>- price : </div>
                                                <input className="border border-black ml-5" value={room?.fields?.price}
                                                    onChange={(ev) => setRoom(
                                                        {
                                                            ...room,
                                                            fields: {
                                                                ...room.fields,
                                                                price: ev.target.value
                                                            }
                                                        }
                                                        // { ...room.fields, price: ev.target.value }

                                                    )} />
                                            </div>
                                        ) : (
                                            <h6>- price : ${room?.fields?.price}</h6>
                                        )}
                                        {isEditPage ? (
                                            <div className="flex mt-5">
                                                <div>- size : </div>
                                                <input className="border border-black ml-5" value={room?.fields?.size}
                                                    onChange={(ev) => setRoom(
                                                        {
                                                            ...room,
                                                            fields: {
                                                                ...room.fields,
                                                                size: ev.target.value
                                                            }
                                                        }
                                                        // { ...room.fields, size: ev.target.value }
                                                    )} />
                                            </div>
                                        ) : (
                                            <h6>- size : {room?.fields?.size} SQFT</h6>
                                        )}
                                        {isEditPage ? (
                                            <div className="flex mt-5">
                                                <div>- max capacity : </div>
                                                <input className="border border-black ml-5" value={room?.fields?.capacity || 0}
                                                    onChange={(ev) => setRoom(
                                                        {
                                                            ...room,
                                                            fields: {
                                                                ...room.fields,
                                                                capacity: ev.target.value
                                                            }
                                                        }
                                                        // { ...room.fields, capacity: ev.target.value }
                                                    )} />
                                            </div>
                                        ) : (
                                            <h6>
                                                - max capacity :
                                                {room?.fields?.capacity > 1 ? `${room?.fields?.capacity} people` : `${room?.fields?.capacity} person`}
                                            </h6>
                                        )}
                                        {isEditPage ? (
                                            <div className="flex mt-5">
                                                <div>- Number of remain room : </div>
                                                <input className="border border-black ml-5" value={room?.fields?.numberOfRemainRoom || 0}
                                                    onChange={(ev) => setRoom(
                                                        {
                                                            ...room,
                                                            fields: {
                                                                ...room.fields,
                                                                numberOfRemainRoom: parseInt(ev.target.value, 10)
                                                            }
                                                        }
                                                        // { ...room.fields, numberOfRemainRoom: ev.target.value }
                                                    )} />
                                            </div>
                                        ) : (
                                            <h6>
                                                - Number of remain room :
                                                {room?.fields?.numberOfRemainRoom}
                                            </h6>
                                        )}
                                        {isEditPage ? (
                                            <div className="flex mt-5">
                                                <div> - Number of day before check in that you cancel booking : </div>
                                                <input className="border border-black ml-5" value={room?.fields?.policyCancelBooking || 0}
                                                    onChange={(ev) => setRoom(
                                                        {
                                                            ...room,
                                                            fields: {
                                                                ...room.fields,
                                                                policyCancelBooking: parseInt(ev.target.value, 10)
                                                            }
                                                        }
                                                        // { ...room.fields, numberOfRemainRoom: ev.target.value }
                                                    )} />
                                            </div>
                                        ) : (
                                            <h6>
                                                - Number of day before check in that you can cancel booking :
                                                {room?.fields?.policyCancelBooking}
                                            </h6>
                                        )}
                                        {isEditPage ? (
                                            <div className="flex mt-5">
                                                <div>- pets : </div>
                                                <input type="checkbox" className="border border-black ml-5" checked={room?.fields?.pets}
                                                    onChange={(ev) => setRoom(
                                                        {
                                                            ...room,
                                                            fields: {
                                                                ...room.fields,
                                                                pets: !room?.fields?.pets
                                                            }
                                                        }
                                                        // { ...room.fields, pets: !room?.fields?.pets }
                                                    )} />
                                            </div>
                                        ) : (
                                            <h6>{room?.fields?.pets ? "pets allowed" : "no pets allowed"}</h6>
                                        )}
                                        {isEditPage ? (
                                            <div className="flex mt-5">
                                                <div>- breakfast : </div>
                                                <input type="checkbox" className="border border-black ml-5" checked={room?.breakfast}
                                                    onChange={(ev) => setRoom(
                                                        {
                                                            ...room,
                                                            fields: {
                                                                ...room.fields,
                                                                breakfast: !room?.fields?.breakfast
                                                            }
                                                        }
                                                        //  { ...room.fields, breakfast: !room?.fields?.breakfast }
                                                    )} />
                                            </div>
                                        ) : (
                                            <h6>{room?.fields?.breakfast && "free breakfast included"}</h6>
                                        )}
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center items-center">
                    <div className="w-11/12">
                        <section className="room-extras">
                            <h6 className="font-bold">extras </h6>
                            <ul className="ml-3">
                                {isEditPage ? (
                                    <div className="flex mt-5">
                                        <textarea className="border border-black ml-5"
                                            value={room?.fields?.extras}
                                            onChange={
                                                //(ev) => setRoom({ ...room, extras: ev.target.value })
                                                (ev) => { OnChangeExtra(ev.target.value) }
                                            }
                                        >
                                        </textarea>
                                    </div>
                                ) : (
                                    <>
                                        {room?.fields?.extras.map((item, index) => (
                                            <li key={index}>- {item}</li>
                                        ))}
                                    </>
                                )}
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="font-bold w-1/12 flex justify-center rounded-2xl">
                        <div className=" "
                        >
                            {isEditPage ? (
                                <button className="flex justify-center items-center " onClick={updateInfoRoom}>
                                    Save
                                </button>
                            ) : (
                                <button className="flex justify-center items-center" onClick={(ev) => { setIsEditPage(!isEditPage) }}>
                                    Edit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ViewAndEditRoomByHotel;