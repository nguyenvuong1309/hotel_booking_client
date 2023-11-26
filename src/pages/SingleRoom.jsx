





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
        <>
            <section className="">
                <div className="flex justify-around">
                    {defaultImages.map((item, index) => (
                        <img key={index} src={item} alt={name} className="w-1/4" />
                    ))}
                </div>
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
            </section>
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
                <BookingRoomForm />
            </div>
        </>
    );
}

export default SingleRoom;