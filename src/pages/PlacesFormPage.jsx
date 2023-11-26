
import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import HightLights from "../components/HotelComponent/HightLights";
import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";


export default function PlacesFormPage() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [hightLights, setHightLights] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [redirect, setRedirect] = useState(false);
    const [price, setPrice] = useState(100);
    const [freeCancellation, setFreeCancellation] = useState(false);
    const [airCondition, setAirCondition] = useState(false);
    const [grade, setGrade] = useState(10);

    useEffect(() => {
        if (!id) {
            return;
        }
        console.log("🚀 ~ file: PlacesFormPage.jsx:31 ~ useEffect ~ id:", id)
        axios.get('/places/' + id, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        },).then(response => {
            const { data } = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
            setPrice(data.price);
        })
    }, [id])

    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        )
    }
    function inputDescription(text) {
        return <p className="text-gray-500 text-sm">{text}</p>
    }
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function savePlace(ev) {
        ev.preventDefault();
        if (id) {
            const placeData = {
                id,
                title, address, addedPhotos,
                description, perks, extraInfo,
                checkIn, checkOut, maxGuests,
                price, hightLights, freeCancellation,
                airCondition, grade
            };
            await axios.put('/places', { placeData });
            setRedirect(true);
        } else {
            // new place
            const placeData = {
                id,
                title, address, addedPhotos,
                description, perks, extraInfo,
                checkIn, checkOut, maxGuests,
                price, hightLights, freeCancellation,
                airCondition, grade
            };
            await axios.post('/places', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }, { placeData });
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }
    return (
        <div>
            <AccountNav />
            <div className="flex justify-center">
                <form onSubmit={savePlace} className="w-10/12">
                    {preInput('Title', 'title for your place. should be short and catchy')}
                    <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example : my apartment" />

                    {preInput('Address', 'Address for this place')}
                    <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="adress" />

                    {preInput('Photos', 'more = better')}
                    <PhotosUploader addedPhotos={addedPhotos} on_Change={setAddedPhotos} />

                    {preInput("Description", "description of the place")}
                    <textarea value={description} onChange={ev => setDescription(ev.target.value)} />

                    {preInput("Perks", "select all the perks of your place")}
                    <Perks selected={perks} onChange={setPerks} />

                    {preInput("Extra info", "house rules, etc")}
                    <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />

                    {preInput("Check in&out times", "add check in and out times, remember to have some time window for cleaning the room between guests")}
                    <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                        <div>
                            <h3 className="mt-2 -mb-1">Check in time</h3>
                            <input type="text" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} placeholder="14:00" />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Check out time</h3>
                            <input type="text" value={checkOut} onChange={ev => setCheckOut(ev.target.value)} placeholder="11:00" />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Max number of guests</h3>
                            <input type="text" value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)} />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Price per night</h3>
                            <input type="text" value={price} onChange={ev => setPrice(ev.target.value)} />
                        </div>
                    </div>


                    {preInput("HightLights", "some special about your hotel")}
                    <HightLights selected={hightLights} onChange={setHightLights} />



                    {preInput("Some extra convinient", "balalalaalalalal")}
                    <>
                        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                            <label className="border p-4 rounded-2xl gap-2 items-center">
                                <input type="checkbox"
                                    checked={freeCancellation} name="Great breakfast" onChange={(ev) => setFreeCancellation(!freeCancellation)}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                                <span>Free cancellation</span>
                            </label>
                            <label className="border p-4 rounded-2xl gap-2 items-center">
                                <input type="checkbox"
                                    checked={airCondition} name="Great view" onChange={(ev) => setAirCondition(!airCondition)}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                </svg>
                                <span>Air Condition</span>
                            </label>
                        </div>
                    </>
                    <div>
                        {
                            id && (
                                <div>
                                    {preInput("Add room", "balalalaalalalal")}
                                    <Link to={`/room/add-the-new-room/${id}`} className="text-blue-600 underline underline-offset-4">
                                        Click here to add the new room
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                    <button className="primary my-4">Save</button>
                </form>
            </div>
        </div>
    )
}