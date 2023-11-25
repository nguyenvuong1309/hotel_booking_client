



import React from "react";
import { Link } from "react-router-dom";
//import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
const Room = ({ room }) => {
    const { name, slug, images, price } = room;
    return (
        <article className="w-full p-10">
            <div className="">
                <img src={images?.[0]} alt="single room" />
                <div className="flex gap-2">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
};

// Room.propTypes = {
//   room: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     price: PropTypes.number.isRequired
//   })
// };
export default Room;