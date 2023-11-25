import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import PlacesFormPage from "./PlacesFormPage";
import AccountNav from "../AccountNav";



export default function PlacesPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        // axios.get('/user-places').then(({ data }) => {
        //     setPlaces(data);
        // })
        fetch(`${import.meta.env.VITE_BASE_URL}/user-places`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }, {
            credentials: 'include'
        })
            .then(response => {
                response.json().then(data => {
                    setPlaces(data);
                });
            });

    }, [])

    return (
        <div className="mx-40">
            <AccountNav />
            <div className="text-center">
                <br />
                <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={"/account/places/new"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add new place
                </Link>
            </div>
            <div className="mt-10">
                {places.length > 0 && places.map(place => (
                    <div className="mt-10" key={place._id}>
                        <Link to={'/account/places/' + place._id} className="flex cursor-pointer gap-4 bg-gray-200 p-4 rounded-2xl">
                            <div className="flex w-32 h-32 bg-gray-300 shrink-0">
                                {place.photos.length > 0 && (
                                    <img className="object-cover w-32" src={`${import.meta.env.VITE_BASE_URL}/uploads/${place.photos[0]}`} alt="" />
                                )}
                            </div>
                            <div className="grow-0 shrink">
                                <h2 className="text-xl">{place?.title}</h2>
                                <p className="text-sm mt-2">{place?.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}