




import React from "react";
import Room from "./Room";
import { Link } from "react-router-dom";
const RoomsList = ({ rooms }) => {
    if (rooms === "undefined" || !rooms || rooms === null || rooms.length === 0) {
        return (
            <div className="flex items-center justify-center">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        );
    }
    return (
        <section className="">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {rooms.map(item => {
                    return (
                        <Link to={`/single-room/${item?.id}`} key={item?.id}>
                            <Room room={item} />
                        </Link>
                    )
                })}
            </div>
        </section>
    );
};

export default RoomsList;