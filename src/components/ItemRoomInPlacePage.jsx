import axios from "axios";
import { useEffect, useState } from "react";







const ItemRoomInPlacePage = ({ room }) => {

    // const [room, setRoom] = useState();
    // useEffect(() => {
    //     axios.get(`${import.meta.env.VITE_BASE_URL}/rooms`).then((data) => {
    //         setRoom(data.data[0].fields)
    //     })
    // }, [])
    return (
        <div className="flex justify-center mt-10">
            <div className="w-11/12 h-fit  gird grid-cols-[1fr_1fr] flex  
        max-[600px]:w-[350px]
        ">
                <div className="w-[450px] h-[167px]">
                    <img
                        //src="https://pix8.agoda.net/hotelImages/836/836781/836781_15120816400038348471.jpg?ca=6&ce=1"
                        src={room?.images?.[0]?.fields?.file?.url}
                        className="flex justify-center items-center h-full w-full" />
                </div>
                <div className="bg-green-100 w-full">
                    <div className="flex items-center justify-center font-bold">
                        {room.name}
                    </div>
                    <div className="ml-4 mt-10">
                        <div className="flex justify-start gap-4 items-center   ">
                            <div>
                                <svg className="h-8 w-8 text-gray-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />  <circle cx="7" cy="10" r="1" /></svg>
                            </div>
                            <div>bed : {room?.capacity}</div>
                        </div>
                        <div className="flex justify-start gap-4 items-center   ">
                            <div>
                                <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <div>size :  {room?.size} m</div>
                        </div>
                        <div className="flex justify-start gap-4 items-center   ">
                            <div>
                                <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <div>{room?.numberOfRemainRoom || 0} room remain</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemRoomInPlacePage;