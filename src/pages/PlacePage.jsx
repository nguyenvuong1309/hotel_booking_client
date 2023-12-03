import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom"

import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";
import Comments from "../components/CommentSection/Comments";
import ItemRoomInPlacePage from "../components/ItemRoomInPlacePage";
import ChatSocketForm from "../components/ChatSocketForm";
import ChatContainer from "../chatSocket/ChatContainer";




export default function PlacePage() {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    const [room, setRoom] = useState();
    const [goToPageChatWithHotelOwner, setGoToPageChatWithHotelOwner] = useState(false);
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/places/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('user:token')
            }
        },).then(response => {
            setPlace(response.data);
        });
        axios.get(`${import.meta.env.VITE_BASE_URL}/rooms`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('user:token')
            }
        },).then((data) => {
            setRoom(data.data)
        })
    }, [id])
    if (!place) return '';
    let temp = room?.filter((item) => item?.fields?.hotelId === id)

    if (temp?.length > 4) {
        temp = temp.slice(0, 4)
    }

    if (goToPageChatWithHotelOwner) {
        return <Navigate to={"/chat"} />
    }
    return (
        <div className="flex justify-center">
            <div className="mt-4 bg-gray-100">

                <div className="flex ml-5">
                    <div className="w-9/12">
                        <h1 className="text-3xl">{place.title}</h1>
                        <AddressLink className="" children={place.address} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <PlaceGallery place={place} />
                </div>


                <div className="flex justify-center gap-10">
                    <div className="w-11/12 flex justify-between 
                max-[400px]:grid
                ">
                        <div className="
                        max-[500px]:w-full
                        ">
                            <div className="flex mt-10">
                                <div className="w-full border border-slate-400">
                                    <div className="font-bold m-4">Hightlights</div>
                                    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] ml-10
                                max-[400px]:grid-cols-[1fr_1fr]
                                ">
                                        <div className="grid justify-start items-center">
                                            <div className="w-14">
                                                <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M959.2 931.3c0 4.2-3.5 7.7-7.7 7.7H72c-4.2 0-7.7-3.5-7.7-7.7v-27.6c0-4.2 3.5-7.7 7.7-7.7h879.5c4.2 0 7.7 3.5 7.7 7.7v27.6z" fill="#333E48"></path><path d="M951.5 896H540.4v43h411.1c4.2 0 7.7-3.5 7.7-7.7v-27.6c0-4.3-3.4-7.7-7.7-7.7z" fill="#00AD68"></path><path d="M133.6 183.6h432v712.3h-432z" fill="#D1D3D3"></path><path d="M133.6 183.6h432v98.6h-432z" fill=""></path><path d="M187.6 613.8h324v87.8h-324z" fill="#FFFFFF"></path><path d="M187.6 613.8h324v32.3h-324z" fill=""></path><path d="M335.3 613.8h28.6v87.8h-28.6z" fill="#333E48"></path><path d="M201.9 687.3h295.3v-59.2H201.9v59.2zM511.6 716h-324c-7.9 0-14.3-6.4-14.3-14.3v-87.8c0-7.9 6.4-14.3 14.3-14.3h324c7.9 0 14.3 6.4 14.3 14.3v87.8c0 7.8-6.4 14.3-14.3 14.3z" fill="#0071CE"></path><path d="M187.6 469h324v87.8h-324z" fill="#FFFFFF"></path><path d="M187.6 469h324v32.3h-324z" fill=""></path><path d="M335.3 469h28.6v87.8h-28.6z" fill="#333E48"></path><path d="M201.9 542.5h295.3v-59.2H201.9v59.2z m309.7 28.7h-324c-7.9 0-14.3-6.4-14.3-14.3V469c0-7.9 6.4-14.3 14.3-14.3h324c7.9 0 14.3 6.4 14.3 14.3v87.8c0 8-6.4 14.4-14.3 14.4z" fill="#0071CE"></path><path d="M187.6 324.2h324V412h-324z" fill="#FFFFFF"></path><path d="M187.6 324.2h324v32.3h-324z" fill=""></path><path d="M335.3 324.2h28.6V412h-28.6z" fill="#333E48"></path><path d="M201.9 397.8h295.3v-59.2H201.9v59.2z m309.7 28.6h-324c-7.9 0-14.3-6.4-14.3-14.3v-87.8c0-7.9 6.4-14.3 14.3-14.3h324c7.9 0 14.3 6.4 14.3 14.3v87.8c0 7.9-6.4 14.3-14.3 14.3z" fill="#0071CE"></path><path d="M266.1 772.8h167V896h-167z" fill="#FFFFFF"></path><path d="M335.3 772.8h28.6V896h-28.6z" fill="#333E48"></path><path d="M447.4 896h-28.6V787.1H280.4V896h-28.6V772.8c0-7.9 6.4-14.3 14.3-14.3h167c7.9 0 14.3 6.4 14.3 14.3V896z" fill="#0071CE"></path><path d="M579.1 148.5H444.4v-44.1c0-10.5-8.6-19.1-19.1-19.1H273.9c-10.5 0-19.1 8.6-19.1 19.1v44.1H120.1c-10.5 0-19.1 8.6-19.1 19.1v74.5c0 10.5 8.6 19.1 19.1 19.1h459c10.5 0 19.1-8.6 19.1-19.1v-74.5c0-10.5-8.6-19.1-19.1-19.1z" fill="#FF5959"></path><path d="M395.8 151.3h-24.1v-24.1c0-5.3-4.3-9.5-9.5-9.5H337c-5.3 0-9.5 4.3-9.5 9.5v24.1h-24.1c-5.3 0-9.5 4.3-9.5 9.5v25.1c0 5.3 4.3 9.5 9.5 9.5h24.1v24.1c0 5.3 4.3 9.5 9.5 9.5h25.1c5.3 0 9.5-4.3 9.5-9.5v-24.1h24.1c5.3 0 9.5-4.3 9.5-9.5v-25.1c0.1-5.2-4.1-9.5-9.4-9.5z" fill="#FFFFFF"></path><path d="M565.6 571.3h324.2V896H565.6z" fill="#D1D3D3"></path><path d="M619.7 662.4h216v87.8h-216z" fill="#FFFFFF"></path><path d="M619.7 662.4h216v32.3h-216z" fill=""></path><path d="M713.4 662.4H742v87.8h-28.6z" fill="#333E48"></path><path d="M634 735.9h187.3v-59.2H634v59.2z m201.7 28.7h-216c-7.9 0-14.3-6.4-14.3-14.3v-87.8c0-7.9 6.4-14.3 14.3-14.3h216c7.9 0 14.3 6.4 14.3 14.3v87.8c0 7.8-6.4 14.3-14.3 14.3z" fill="#0071CE"></path><path d="M565.6 515.4h341.7c10.5 0 19.1 8.6 19.1 19.1v36.6c0 10.5-8.6 19.1-19.1 19.1H565.6v-74.8z" fill="#FF5959"></path><path d="M601.7 590.2v-74.8h-36.1V896h36.1V626.6h288.1v-36.4z" fill=""></path><path d="M819.5 896c0-33.8-27.4-61.1-61.1-61.1-33.8 0-61.1 27.4-61.1 61.1h122.2z" fill="#218649"></path></g></svg>
                                            </div>
                                            <div className="font-bold">
                                                Hospital
                                            </div>
                                        </div>
                                        <div className="grid justify-start items-center">
                                            <div className="w-14">
                                                <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M904.8 810.5h-638c-65.5 0-118.9-53.3-118.9-118.9V62.9c0-8.3 6.7-15 15-15s15 6.7 15 15v628.7c0 49 39.9 88.9 88.9 88.9h638c8.3 0 15 6.7 15 15s-6.7 15-15 15z" fill="#0F53A8"></path><path d="M163 62.9m-37.9 0a37.9 37.9 0 1 0 75.8 0 37.9 37.9 0 1 0-75.8 0Z" fill="#B6CDEF"></path><path d="M163 115.8c-29.2 0-52.9-23.7-52.9-52.9S133.8 10 163 10s52.9 23.7 52.9 52.9-23.8 52.9-52.9 52.9z m0-75.8c-12.6 0-22.9 10.3-22.9 22.9 0 12.6 10.3 22.9 22.9 22.9s22.9-10.3 22.9-22.9c0-12.6-10.3-22.9-22.9-22.9zM334.7 881.2c-8.3 0-15-6.7-15-15v-70.7c0-8.3 6.7-15 15-15s15 6.7 15 15v70.7c0 8.3-6.7 15-15 15z" fill="#0F53A8"></path><path d="M334.7 931.9m-65.7 0a65.7 65.7 0 1 0 131.4 0 65.7 65.7 0 1 0-131.4 0Z" fill="#89B7F5"></path><path d="M334.7 1012.5c-44.5 0-80.7-36.2-80.7-80.7s36.2-80.7 80.7-80.7 80.7 36.2 80.7 80.7-36.2 80.7-80.7 80.7z m0-131.3c-27.9 0-50.7 22.7-50.7 50.7 0 27.9 22.7 50.7 50.7 50.7s50.7-22.7 50.7-50.7c0-28-22.7-50.7-50.7-50.7zM792 881.2c-8.3 0-15-6.7-15-15v-70.7c0-8.3 6.7-15 15-15s15 6.7 15 15v70.7c0 8.3-6.8 15-15 15z" fill="#0F53A8"></path><path d="M792 931.9m-65.7 0a65.7 65.7 0 1 0 131.4 0 65.7 65.7 0 1 0-131.4 0Z" fill="#89B7F5"></path><path d="M792 1012.5c-44.5 0-80.7-36.2-80.7-80.7s36.2-80.7 80.7-80.7 80.7 36.2 80.7 80.7-36.2 80.7-80.7 80.7z m0-131.3c-27.9 0-50.7 22.7-50.7 50.7 0 27.9 22.7 50.7 50.7 50.7 27.9 0 50.7-22.7 50.7-50.7-0.1-28-22.8-50.7-50.7-50.7z" fill="#0F53A8"></path><path d="M576 666.6H363.8c-20.2 0-36.6-16.4-36.6-36.6V347c0-20.2 16.4-36.6 36.6-36.6H576c20.2 0 36.6 16.4 36.6 36.6v283c0 20.2-16.4 36.6-36.6 36.6z" fill="#B6CDEF"></path><path d="M576 681.6H363.8c-28.5 0-51.6-23.1-51.6-51.6V347c0-28.5 23.1-51.6 51.6-51.6H576c28.5 0 51.6 23.1 51.6 51.6v283c0 28.5-23.1 51.6-51.6 51.6zM363.8 325.4c-11.9 0-21.6 9.7-21.6 21.6v283c0 11.9 9.7 21.6 21.6 21.6H576c11.9 0 21.6-9.7 21.6-21.6V347c0-11.9-9.7-21.6-21.6-21.6H363.8z" fill="#0F53A8"></path><path d="M687 429.2h89v237.5h-89z" fill="#B6CDEF"></path><path d="M776 681.6h-89c-8.3 0-15-6.7-15-15V429.2c0-8.3 6.7-15 15-15h89c8.3 0 15 6.7 15 15v237.5c0 8.2-6.8 14.9-15 14.9z m-74-30h59V444.2h-59v207.4z" fill="#0F53A8"></path><path d="M766 734.8H322.8c-14.3 0-25.9-11.6-25.9-25.9V548.6c0-14.3 11.6-25.9 25.9-25.9H766c14.3 0 25.9 11.6 25.9 25.9v160.3c0.1 14.3-11.6 25.9-25.9 25.9z" fill="#89B7F5"></path><path d="M766 749.8H322.8c-22.6 0-40.9-18.4-40.9-40.9V548.6c0-22.6 18.4-40.9 40.9-40.9H766c22.6 0 40.9 18.4 40.9 40.9v160.3c0.1 22.6-18.3 40.9-40.9 40.9zM322.8 537.6c-6 0-10.9 4.9-10.9 10.9v160.3c0 6 4.9 10.9 10.9 10.9H766c6 0 10.9-4.9 10.9-10.9V548.6c0-6-4.9-10.9-10.9-10.9H322.8z" fill="#0F53A8"></path></g></svg>
                                            </div>
                                            <div className="font-bold truncate">
                                                Check-in [24-hour]
                                            </div>
                                        </div>
                                        <div className="grid justify-start items-center">
                                            <div className="w-14">
                                                <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M466.2 102.9c38.8 0 74.2 14.7 100.8 38.9 14.2-5.9 29.7-9.1 46-9.1 61.7 0 112.5 46.5 119.3 106.4 0.5 4.5 1.5 13.7-11.4 13.7H328.4c-7.8 0-11.9-9.9-11.4-14.8 7.5-75.8 71.4-135.1 149.2-135.1z" fill="#00B3E3"></path><path d="M379.6 227.7c1.1-10.4-6.7-19-17.2-19H147.7c-10.5 0-18.2 8.5-17.2 19l8.5 84.5c1.1 10.4 10.5 19 21 19h190.1c10.5 0 19.9-8.5 21-19l8.5-84.5z" fill="#0071CE"></path><path d="M131 233.1l2.9 28.6h242.3l2.9-28.6z" fill=""></path><path d="M135.2 274.4l3.8 37.8c1.1 10.4 10.5 19 21 19h190.1c10.5 0 19.9-8.5 21-19l3.8-37.8H135.2z" fill=""></path><path d="M173.3 433.8h163.6v465.9H173.3z" fill="#A4A9AD"></path><path d="M173.3 433.8h163.6v87.8H173.3z" fill=""></path><path d="M959.7 913.5c0 4.2-3.5 7.7-7.7 7.7H73.1c-4.2 0-7.7-3.5-7.7-7.7v-27.6c0-4.2 3.5-7.7 7.7-7.7H952c4.2 0 7.7 3.5 7.7 7.7v27.6z" fill="#333E48"></path><path d="M403.5 308.7c1.3-10.4-6.2-18.9-16.7-18.9H123.2c-10.5 0-18 8.5-16.7 18.9l18.8 147.4c1.3 10.4 11 18.9 21.5 18.9h216.5c10.5 0 20.2-8.5 21.5-18.9l18.7-147.4z" fill="#A4A9AD"></path><path d="M193.1 289.8h123.8v79.1H193.1z" fill="#D1D3D3"></path><path d="M111.3 345.6l9.3 73.6h268.9l9.3-73.6z" fill="#0071CE"></path><path d="M240.7 345.6h28.6v73.6h-28.6zM152.9 345.6h28.6v73.6h-28.6zM328.6 345.6h28.6v73.6h-28.6z" fill=""></path><path d="M173.3 587.7h163.6v127.8H173.3zM285.5 230.2c0 16.8-13.6 30.4-30.4 30.4-16.8 0-30.4-13.6-30.4-30.4v-21.5c0-16.8 13.6-30.4 30.4-30.4s30.4 13.6 30.4 30.4v21.5z" fill="#D1D3D3"></path><path d="M952 878.2H406v43h546c4.2 0 7.7-3.5 7.7-7.7v-27.6c0-4.3-3.5-7.7-7.7-7.7z" fill="#A4A9AD"></path><path d="M824.4 668.2H562l-57.4-57.4c-6.8-6.4-15.9-10.3-26-10.3-20.8 0-37.8 16.9-37.8 37.7v105.5c0 41.7 33.8 75.5 75.5 75.5h308c41.7 0 75.5-33.8 75.5-75.5 0.1-41.7-33.7-75.5-75.4-75.5z" fill="#D1D3D3"></path><path d="M720.1 788.6h-144c-7.9 0-14.3-6.4-14.3-14.3s6.4-14.3 14.3-14.3h144c7.9 0 14.3 6.4 14.3 14.3s-6.4 14.3-14.3 14.3z" fill="#A4A9AD"></path><path d="M878.3 690.9h-77.1c-14.6 0-26.5 11.8-26.5 26.5 0 14.6 11.8 26.5 26.5 26.5h98.7v-0.1c0-20.7-8.3-39.3-21.6-52.9z" fill="#0071CE"></path><path d="M794.2 848.7m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#333E48"></path><path d="M595.6 848.7m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#333E48"></path><path d="M562 668.2l-57.4-57.4c-6.8-6.4-15.9-10.3-26-10.3-20.8 0-37.8 16.9-37.8 37.7v105.5c0 26.1 13.3 49.2 33.5 62.7 14.2-46.7 59.8-138.2 187.1-138.2H562z" fill="#0071CE"></path><path d="M523.1 629.4c-33.4 12-61.7 32-82.3 51.4v42.5c16.1-20.8 54.1-57.5 105-71.1l-22.7-22.8z" fill="#00B3E3"></path><path d="M774.7 428m-90.8 0a90.8 90.8 0 1 0 181.6 0 90.8 90.8 0 1 0-181.6 0Z" fill="#FFB819"></path></g></svg>                            </div>
                                            <div className="font-bold">
                                                Airport transfer
                                            </div>
                                        </div>
                                        <div className="grid justify-start items-center">
                                            <div className="w-14 flex justify-center items-center">
                                                <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M175.4 866.3c39.1 25.7 166.1 114.6 488.5-229.7s223-425.9 196.2-454.9c-26.8-29-263.6-149.6-556 122.5C21.6 567 175.4 866.3 175.4 866.3z" fill="#EAAD6A"></path><path d="M241.9 696.5s26.7 26.1 48.6 4.5c21.9-21.7-2.2-40.2-2.2-40.2L171.6 514l-27.3 67.4 97.6 115.1zM623.3 323.5s26.7 26.1 48.6 4.5c21.9-21.7-2.2-40.2-2.2-40.2L565.9 153.9l-62.1 19.2 119.5 150.4zM386.5 463.8s26.7 26.1 48.6 4.5c21.9-21.7-2.2-40.2-2.2-40.2L322.4 287.5 280.8 332l105.7 131.8z" fill="#FFC661"></path><path d="M604.8 577.4c-227.5 243-389.5 280.3-455.1 229.3 10.4 34.3 20.7 54.5 20.7 54.5 39.1 25.7 166.1 114.6 488.5-229.7s223-425.9 196.2-454.9c-6.1-6.6-22.9-17.8-48.6-28.1 36.5 54.7 15.2 197.1-201.7 428.9z" fill="#D19152"></path><path d="M310.5 281c-4.3 4-8.6 8.1-12.9 12.4-0.7 0.7-1.5 1.4-2.2 2.1-0.4 0.4-0.7 0.8-1.1 1.1-3.8 3.8-7.7 7.9-11.7 12.2-183.1 193.9-212.5 464-112.4 564.1 90.5 90.5 259.8 16.9 489.7-213 229.8-229.8 303.5-399.2 213-489.7C773.1 70.4 504.2 99.3 310.5 281z m349.1 7.6c3.5 3.1 5.5 7.4 5.6 12 0.2 4.7-1.6 9.1-4.9 12.4-6.3 6.3-16.3 6.6-23 0.7l-2.8-2.4c-37-32.7-69.3-70.4-95.9-112L524.3 177c1.2-0.5 2.5-0.9 3.7-1.4 8.8-3.4 17.6-6.6 26.3-9.4 0.4-0.1 0.7-0.2 1.1-0.4l3.4 5.3c28.1 43.6 61.9 83.2 100.8 117.5z m-225 154.5c3.5 3.1 5.5 7.4 5.6 12 0.2 4.7-1.6 9.1-4.9 12.4-6.3 6.3-16.3 6.6-23 0.7l-2.8-2.4c-37-32.7-69.3-70.4-95.9-112l-14.9-23.4c6.7-7.2 13.6-14.3 20.7-21.2 0.8-0.8 1.7-1.6 2.5-2.4l11.9 18.7c28.1 43.6 61.9 83.2 100.8 117.6z m-154.5 225c3.5 3.1 5.5 7.4 5.6 12 0.2 4.7-1.6 9.1-4.9 12.4-6.3 6.3-16.3 6.6-23 0.7l-2.8-2.4c-37-32.7-69.3-70.4-95.8-112l-0.4-0.6c3.7-13.1 7.9-26.5 12.8-39.9l7.8 12.2c28 43.6 61.9 83.2 100.7 117.6z m361-27c-124.2 124.2-348 317-452 213-47.2-47.2-60.4-139.1-38.7-241.5 25.2 35.9 54.2 69 87.2 98.1l2.8 2.4c17.1 15.1 43.2 14.3 59.4-1.8 8.4-8.4 13.1-20.1 12.7-32-0.4-11.9-5.7-23.3-14.6-31.2-37-32.7-69.3-70.4-95.9-112l-18.1-28.3c23-54 55.2-107.7 96.7-156.7l10.9 17c27.9 43.7 61.8 83.3 100.6 117.6l2.8 2.4c17.1 15.1 43.2 14.4 59.4-1.8 8.4-8.4 13.1-20.1 12.7-32-0.4-11.9-5.7-23.3-14.6-31.2-37-32.7-69.3-70.4-95.9-112L342 288.4c49-43.2 103.1-76.9 157.6-101.2l16.8 26.3c27.9 43.7 61.8 83.3 100.6 117.6l2.8 2.4c17.1 15.1 43.2 14.3 59.4-1.8 8.4-8.4 13.1-20.1 12.7-32-0.4-11.9-5.7-23.3-14.6-31.2-36.7-32.4-68.6-69.8-95.1-110.9 114.4-31.4 220.1-20.6 272 31.3 103.9 104.2-88.9 328-213.1 452.2z" fill="#004364"></path><path d="M462 257.8m-15.4 0a15.4 15.4 0 1 0 30.8 0 15.4 15.4 0 1 0-30.8 0Z" fill="#004364"></path><path d="M686.7 188.2m-15.4 0a15.4 15.4 0 1 0 30.8 0 15.4 15.4 0 1 0-30.8 0Z" fill="#004364"></path><path d="M681 520.2m-15.4 0a15.4 15.4 0 1 0 30.8 0 15.4 15.4 0 1 0-30.8 0Z" fill="#004364"></path><path d="M607 601.3m-15.4 0a15.4 15.4 0 1 0 30.8 0 15.4 15.4 0 1 0-30.8 0Z" fill="#004364"></path><path d="M249.5 457.8m-15.4 0a15.4 15.4 0 1 0 30.8 0 15.4 15.4 0 1 0-30.8 0Z" fill="#004364"></path><path d="M392.9 292.7m-15.4 0a15.4 15.4 0 1 0 30.8 0 15.4 15.4 0 1 0-30.8 0Z" fill="#004364"></path><path d="M197 758.3m-15.4 0a15.4 15.4 0 1 0 30.8 0 15.4 15.4 0 1 0-30.8 0Z" fill="#004364"></path></g></svg>
                                            </div>
                                            <div className="font-bold">
                                                Great Breakfast
                                            </div>
                                        </div>
                                        <div className="grid justify-start items-center">
                                            <div className="w-14">
                                                <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M760.5 568.6l-37-46.9-162.5 128V421.8H449.9v306.3L301.1 606.8l-37.8 46.3 186.6 152.2v128H561V725.9z" fill="#D68231"></path><path d="M301.1 606.8l-37.8 46.4 83.9 68.4c18.5-10.1 32.8-25.8 40.1-44.5l-86.2-70.3zM723.5 521.7l-88 69.3c6.3 19.2 19.9 35.5 37.9 46.3l87.2-68.7-37.1-46.9zM449.9 421.8v187.8c18.2 2.5 36.8 3.8 55.5 3.8 18.8 0 37.3-1.3 55.5-3.8V421.8h-111z" fill=""></path><path d="M207.2 316a298.3 250.7 0 1 0 596.6 0 298.3 250.7 0 1 0-596.6 0Z" fill="#00AD68"></path><path d="M648.4 545.1a93.6 84.8 0 1 0 187.2 0 93.6 84.8 0 1 0-187.2 0Z" fill="#7CDFA8"></path><path d="M188.6 630a93.6 84.8 0 1 0 187.2 0 93.6 84.8 0 1 0-187.2 0Z" fill="#218649"></path><path d="M648.1 921.9c0-10.3-8.4-18.7-18.7-18.7H381.5c-10.3 0-18.7 8.4-18.7 18.7v18.7c0 10.3 8.4 18.7 18.7 18.7h247.9c10.3 0 18.7-8.4 18.7-18.7v-18.7z" fill="#218649"></path><path d="M377.8 391.3c-16.7-16.7-71.2-33.3-73.9-30.5-2.8 2.8 13.8 57.2 30.5 73.9 16.7 16.7 40 20.5 52 8.5 11.9-11.9 8.1-35.2-8.6-51.9z" fill="#7CDFA8"></path><path d="M616.2 414.6c16.7-16.7 33.3-71.2 30.5-73.9-2.8-2.8-57.2 13.8-73.9 30.5-16.7 16.7-20.5 40-8.5 52 11.9 11.9 35.2 8.1 51.9-8.6zM471.1 220.7c0-23.6-26.8-73.9-30.7-73.9-3.9 0-30.7 50.2-30.7 73.9s13.7 42.8 30.7 42.8 30.7-19.2 30.7-42.8z" fill="#218649"></path><path d="M681.1 267.6c16.7-16.7 33.3-71.2 30.5-73.9-2.8-2.8-57.2 13.8-73.9 30.5-16.7 16.7-20.5 40-8.5 52 11.9 11.9 35.2 8.1 51.9-8.6z" fill="#7CDFA8"></path></g></svg>
                                            </div>
                                            <div className="font-bold">
                                                Great View
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex justify-start mt-10">
                                <div className="w-full border border-slate-400">
                                    <div className="font-bold m-4">Facility</div>
                                    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] ml-10
                                max-[400px]:grid-cols-[1fr_1fr_1fr]
                                max-[400px]:gap-x-5
                                ">
                                        <div className="grid justify-start items-center">
                                            <div className="font-bold truncate">
                                                Swimming pool
                                            </div>
                                        </div>
                                        <div className="grid justify-start items-center">
                                            <div className="font-bold">
                                                Free wi-fi
                                            </div>
                                        </div>
                                        <div className="grid justify-start items-center">

                                            <div className="font-bold">
                                                Parking
                                            </div>
                                        </div>
                                        <div className="grid justify-start items-center">

                                            <div className="font-bold">
                                                Parking
                                            </div>
                                        </div>
                                        <div className="grid justify-start items-center">

                                            <div className="font-bold">
                                                Parking
                                            </div>
                                        </div>
                                        <div className="grid justify-start items-center">

                                            <div className="font-bold">
                                                Parking
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/12 border border-slate-400 mt-10
                    max-[400px]:w-full
                    ">
                            <a href={'https://maps.google.com/?q=' + place?.title} target="_blank" className="" >
                                <img src={"https://cdn6.agoda.net/images/MAPS-1214/default/property-map-entry-1.svg?s=1024x"} alt="" className="" />
                            </a>
                            <div className="flex items-center justify-center font-bold text-2xl mt-4">
                                {place?.grade} Excellent
                            </div>
                            <div onClick={(ev) => { setGoToPageChatWithHotelOwner(true) }} className="flex justify-center mt-4">
                                Chat with owner of hotel
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-11/12 bg-slate-600">
                        a
                        <ChatContainer />
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-11/12">
                        <div className="">

                            <div className="flex mt-10">
                                <div className="w-9/12  border-slate-400 grid grid-cols-2 justify-between gap-10 text-2xl">
                                    {temp?.length > 0 ? (
                                        <div key="234">Room available</div>
                                    ) : (
                                        <div key="345"></div>
                                    )}
                                </div>
                            </div>
                            <div className="flex mt-2">
                                <div className="grid grid-cols-[1fr_1fr]
                                        max-[400px]:grid-cols-1
                                        max-[400px]:w-full
                                        max-[400px]:justify-center
                                        ">
                                    {temp?.length > 0 ? temp.map((item) => (
                                        <div className="w-full" key={item?.id} >
                                            <Link to={`/single-room/${item?._id}`}>
                                                <ItemRoomInPlacePage room={item.fields} />
                                            </Link>
                                        </div>
                                    )) : (
                                        <div>
                                            <div className="flex justify-center items-center m-10 font-thin" key="123">No Room available</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center items-center">
                    <div className="w-11/12">
                        <Comments />
                    </div>
                </div>

            </div>
        </div >
    )
}