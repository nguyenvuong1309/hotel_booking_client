import { useContext, useEffect, useState } from "react"
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSackDollar
} from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import TransferButton from "./pages/nft-market-place/component-for-transfer-token/TransferButton";


export default function BookingWidget(data) {
    const hotel = data?.data?.hotel;
    const [hotelRoom, setHotelRoom] = useState({ ...data?.data?.hotelRoom })

    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState('');
    const [hotelOwner, setHotelOwner] = useState(null);

    const { user } = useContext(UserContext);
    let numberOfNights = 0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }

    useEffect(() => {
        setName(user?.name);
    }, [user])

    useEffect(() => {
        axios.get(`/users/${data?.data?.hotel?.owner}`).then((res) => {
            setHotelOwner(res.data)
        })
    }, [])

    async function bookThisPlace() {
        if (localStorage.getItem('user:token')) {
            const data = {
                checkIn, checkOut, numberOfGuests,
                name, phone, hotelRoom: hotelRoom?._id,
                price: numberOfNights * hotelRoom?.fields?.price,
                hotelName: hotel?.title, hotelAddress: hotel?.address,
                hotelId: hotel?._id
            }

            const response = await axios.post('/hotemRoomBooking',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + localStorage.getItem('user:token')
                    }
                },
            );


            const roomUpdateInfo = {
                sys: {
                    id: hotelRoom.sys.id
                },
                _id: hotelRoom._id,
                fields: {
                    breakfast: hotelRoom.fields.breakfast,
                    description: hotelRoom.fields.description,
                    extras: hotelRoom.fields.extras,
                    featured: hotelRoom.fields.featured,
                    grade: hotelRoom.fields.grade,
                    hotelId: hotelRoom.fields.hotelId,
                    images: hotelRoom.fields.images,
                    name: hotelRoom.fields.name,
                    numberOfRemainRoom: hotelRoom.fields.numberOfRemainRoom - 1,
                    pets: hotelRoom.fields.pets,
                    price: hotelRoom.fields.price,
                    size: hotelRoom.fields.size,
                    slug: hotelRoom.fields.slug,
                    type: hotelRoom.fields.type,

                }
            }
            await axios.put(`/rooms/${hotelRoom?._id}`, roomUpdateInfo)

            const bookingId = response.data._id;
            setRedirect(`/account/bookings/${bookingId}`);
        } else {
            setRedirect(`/login`)
            toast.error("You need to login to book hotelRoom");
        }
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }


    const address = useAddress();
    const { contract } = useContract(import.meta.env.VITE_TOKEN_ADDRESS);
    const {
        data: tokenBalance,
        isLoading: isTokenBalanceLoading,
    } = useTokenBalance(contract, address);
    const paymentUsingToken = () => {
        if (tokenBalance?.displayValue < numberOfNights * hotelRoom?.fields?.price) {
            toast.error("Your balance is not sufficient to payment")
        } else {
            if (hotelOwner?.Web3AddressWallet) {
                try {
                    <div>
                        <TransferButton key={contract.address} tokenAddress={import.meta.env.VITE_TOKEN_ADDRESS} receiver={hotelRoom.Web3AddressWallet} amount={hotelRoom?.fields?.price.toString()} message={"aaaa"} />
                    </div>
                    // toast.success("Success payment");
                }
                catch (err) {
                    toast.error("error")
                }
            }
            else {
                toast.error("Hotel owner don't support payment using token");
            }
        }
    }

    return (
        <div className="bg-white shadow p-4 rounded-2xl">
            <div className="text-2xl">
                <span className="font-bold text-pink-700">
                    <FontAwesomeIcon icon={faSackDollar} className="text-xl mr-2" />Price:</span>
                <span className="font-bold">{hotelRoom?.fields?.price}</span> / per night
            </div>
            <div className="border rounded-xl mt-4">
                <div className="flex flex-wrap">
                    <div className="py-3 px-4 w-fulll">
                        <label>Check in: </label>
                        <input type="date"
                            value={checkIn}
                            onChange={ev => setCheckIn(ev.target.value)} />
                    </div>
                    <div className="py-3 px-4 w-full border-t">
                        <label>Check out: </label>
                        <input type="date"
                            value={checkOut}
                            onChange={ev => setCheckOut(ev.target.value)} />
                    </div>
                </div>
                <div>
                    <div className="py-3 px-4 border-t ">
                        <label>Number of guests: </label>
                        <input type="number"
                            value={numberOfGuests}
                            onChange={ev => setNumberOfGuests(ev.target.value)} className="border border-gray-700 w-full rounded-md px-2" />
                    </div>
                </div>
                {numberOfNights > 0 && (
                    <div className="py-3 px-4 border-t ">
                        <div>
                            <label>Your full name: </label>
                            <input type="text"
                                value={name}
                                onChange={ev => setName(ev.target.value)} className="border border-gray-700 w-full rounded-md px-2" />
                        </div>
                        <div>
                            <label>Phone number: </label>
                            <input type="tel"
                                value={phone}
                                onChange={ev => setPhone(ev.target.value)} className="border border-gray-700 w-full rounded-md px-2" />
                        </div>
                    </div>
                )}
            </div>
            <button onClick={bookThisPlace} className="primary mt-4">
                Book this room
                {numberOfNights > 0 && (
                    <>
                        <span> ${numberOfNights * hotelRoom?.fields?.price}</span>
                    </>
                )}
            </button>
            <div className="flex justify-center" onClick={paymentUsingToken}>
                <div className="w-1/2">
                    {
                        hotelOwner?.Web3AddressWallet ? (
                            <div>
                                <div className="flex justify-center mt-5">payment using token</div>
                                <div className="flex justify-center">
                                    <TransferButton key={contract.address} tokenAddress={import.meta.env.VITE_TOKEN_ADDRESS} receiver={hotelRoom.Web3AddressWallet} amount={hotelRoom?.fields?.price.toString()} message={"aaaa"} />
                                </div>
                            </div>
                            // toast.success("Success payment");
                        ) : (
                            <div>
                                Hotel owner don't support payment using token
                            </div>
                        )}
                </div>
            </div>
        </div >
    )
};