





import React, { Component, useContext } from "react";
//import defaultBcg from "../images/room-1.jpeg";
//import Hero from "../components/Hero";
//import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import BookingRoomForm from "../components/BookingRoomForm";

//import StyledHero from "../components/StyledHero";
const SingleRoom = () => {
    const { id } = useParams();
    const { context } = useContext(RoomContext);
    const room = context.getRoom(id);

    if (!room) {
        return (
            <div className="error">
                <h3> no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        );
    }
    const {
        name,
        description,
        capacity,
        size,
        price,
        extras,
        breakfast,
        pets,
        images
    } = room;
    const [main, ...defaultImages] = images;

    return (
        <div>
            <section className="">
                <div className="flex justify-around
                max-[500px]:grid
                max-[500px]:grid-cols-1
                max-[500px]:justify-center
                ">
                    {defaultImages.map((item, index) => (
                        <div className="w-full flex justify-center">
                            <img key={index} src={item} alt={name} className="w-3/4 
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
                                <p className="ml-3">{description}</p>
                            </article>
                            <article className="info">
                                <h3 className="font-bold">info</h3>
                                <div className="ml-3">
                                    <h6>- price : ${price}</h6>
                                    <h6>- size : {size} SQFT</h6>
                                    <h6>
                                        - max capacity :
                                        {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                                    </h6>
                                    <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                                    <h6>{breakfast && "free breakfast included"}</h6>
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
                            {extras.map((item, index) => (
                                <li key={index}>- {item}</li>
                            ))}
                        </ul>
                    </section>
                    <div className="">
                        <div className="font-bold">
                            booking form
                        </div>
                        {room && room?.numberOfRemainRoom > 0 ? (
                            <BookingRoomForm />
                        ) : (
                            <div className="flex justify-center text-xl bg-slate-200">
                                Sorry but we don't have this type of room available
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleRoom;