
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
    const [photoLink, setPhotoLink] = useState('');
    const [star, setStar] = useState(5);
    const [city, setCity] = useState("");


    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/places/' + id, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('user:token')
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
            setHightLights(data.hightLights);
            setAirCondition(data.aircondition);
            setFreeCancellation(data.freeCancellation);
            setPrice(data.price);
            setStar(data?.star || 5);
            setCity(data?.city || "null")
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
                airCondition, grade, star, city
            };
            await axios.put(`/places/${id}`, { placeData },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: 'Bearer ' + localStorage.getItem('user:token')
                    }
                }
            );
            setRedirect(true);
        } else {
            // new place
            const placeData = {
                id,
                title, address, addedPhotos,
                description, perks, extraInfo,
                checkIn, checkOut, maxGuests,
                price, hightLights, freeCancellation,
                airCondition, grade, star, city
            };
            await axios.post('/places',
                { placeData },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: 'Bearer ' + localStorage.getItem('user:token')
                    }
                });
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }

    const addPhotoByLink = (ev) => {
        ev.preventDefault();
        setAddedPhotos([...addedPhotos, photoLink])
        setPhotoLink("")
    }

    function removePhoto(ev, filename) {
        ev.preventDefault();
        setAddedPhotos([...addedPhotos.filter(photo => photo !== filename)]);
    }
    function selectAsMainPhoto(ev, filename) {
        ev.preventDefault();
        const addedPhotoWithoutSelected = addedPhotos.filter(photo => photo !== filename);
        const newAddedPhotos = [filename, ...addedPhotoWithoutSelected];
        setAddedPhotos(newAddedPhotos);
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

                    {preInput('City', 'hotel in that city')}
                    <input type="text" value={city} onChange={ev => setCity(ev.target.value)} placeholder="adress" />

                    {preInput('Photos', 'more = better')}
                    {/* <PhotosUploader addedPhotos={addedPhotos} on_Change={setAddedPhotos} /> */}
                    <div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <input
                                value={photoLink}
                                onChange={ev => setPhotoLink(ev.target.value)}
                                type="text" placeholder={"Add link images ..."}
                                className="border border-gray-700 rounded-md p-1" />
                            <button onClick={ev => { addPhotoByLink(ev) }} className="border border-gray-700 text-white px-4 rounded-md" style={{ backgroundColor: '#F5385D' }}>
                                Add photo
                            </button>
                        </div>
                        <div className="mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            {addedPhotos && addedPhotos.length > 0 && addedPhotos.map(link => (
                                <div className="h-32 flex relative" key={link}>
                                    <img className="rounded-2xl w-full object-cover"
                                        //src={`${import.meta.env.VITE_BASE_URL}/uploads/${link}`} 
                                        src={link}
                                        alt="abc" />
                                    <button onClick={ev => removePhoto(ev, link)} className=" cursor-pointer absolute bottom-0 right-2 text-white bg-black bg-opacity-50 rounded-xl p-1 sm:p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                    <button onClick={ev => selectAsMainPhoto(ev, link)} className=" cursor-pointer absolute bottom-0 left-2 text-white bg-black p-1 bg-opacity-50 rounded-xl sm:p-2">
                                        {link === addedPhotos[0] && (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        {link !== addedPhotos[0] && (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            ))}
                            <label className="cursor-pointer flex gap-1 items-center justify-center border bg-transparent rounded-xl text-xl text-black">
                                <input type="file" multiple className="hidden"
                                //    onChange={uploadPhoto} 
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                <span>Upload</span>
                            </label>
                        </div>
                    </div>

                    {preInput("Description", "description of the place")}
                    <textarea value={description} onChange={ev => setDescription(ev.target.value)} />

                    {preInput("Star", "bla bla bla bla")}
                    <input type="text" value={star} onChange={(ev) => setStar(ev.target.value)} />

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
                    <HightLights hightLights={hightLights} setHightLights={setHightLights} />



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
                    <div>
                        {
                            id && (
                                <div>
                                    {preInput("All Room", "balalalaalalalal")}
                                    <Link to={`/places/allRoom/${id}`} className="text-blue-600 underline underline-offset-4">
                                        Click here to view all the room
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