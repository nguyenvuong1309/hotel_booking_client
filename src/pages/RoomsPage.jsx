


import { useContext } from "react";
import RoomsFilter from "../components/RoomFilter";
import { RoomContext } from '../context/RoomContext';
import RoomsList from "../components/RoomList";





const RoomsPage = () => {
    const { context, ready, rooms } = useContext(RoomContext);
    return (
        <div>
            <div className="grid items-center justify-center">
                {
                    ready && (
                        <div className="grid">
                            <div className="w-screen px-20">
                                <RoomsFilter rooms={rooms} />
                            </div>
                            <div className="">
                                <RoomsList rooms={context.sortedRooms} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default RoomsPage;