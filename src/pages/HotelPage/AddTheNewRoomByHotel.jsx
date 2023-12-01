
import axios from "axios";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";





const AddTheNewRoomByHotel = () => {
    const { hotelId } = useParams();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [capacity, setCapacity] = useState(0);
    const [featured, setFeatured] = useState(false);
    const [description, setDescription] = useState("");
    const [pet, setPet] = useState(false);
    const [breakfast, setBreakFast] = useState(false);
    const [numberOfRoom, setNumberOfRoom] = useState(0);

    const [extra, setExtra] = useState([]);
    const [text, setText] = useState("");

    const [images, setImages] = useState([]);
    const [textImage, setTextImage] = useState("");

    const [redirect, setRedirect] = useState("");

    const addTextInExtraInformation = () => {
        setExtra([...extra, text])
        setText("")
    }

    const addImageLink = () => {
        setImages([...images, textImage]);
        setTextImage("");
    }


    const createNewRoomByHotel = async () => {
        const hotelRoom = {
            sys: {
                id: '4'
            },
            fields: {
                name: name,
                hotelId: hotelId,
                slug: name,
                type: type,
                price: parseInt(price, 10),
                size: parseInt(size, 10),
                capacity: parseInt(capacity, 10),
                pets: pet,
                breakfast: breakfast,
                featured: featured,
                description: description,
                extras: extra,
                numberOfRemainRoom: parseInt(numberOfRoom, 10),
                images: [
                    {
                        fields: {
                            file: {
                                url: images?.[0]
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: images?.[1]
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: images?.[2]
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: images?.[3]
                            }
                        }
                    }
                ]
            }
        }
        await axios.post('/rooms',
            { hotelRoom: hotelRoom },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('user:token')
                }
            }
        )
        setRedirect(`/places/allRoom/${hotelId}`);
    }


    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <div className="flex justify-center item-center">
            <div className="w-11/12">
                <div>Add the new room</div>
                <div className="mt-10">
                    <div>Name of the room</div>
                    <input type="text" placeholder="ex : Single room" value={name} onChange={(ev) => { setName(ev.target.value) }} />
                </div>
                <div className="mt-10">
                    <div>Type of the room</div>
                    <input type="text" placeholder="ex : Single room" value={type} onChange={(ev) => { setType(ev.target.value) }} />
                </div>
                <div className="mt-10">
                    <div>Size of the room</div>
                    <input type="number" placeholder="ex : Single room" value={size} onChange={(ev) => { setSize(ev.target.value) }} />
                </div>
                <div className="mt-10">
                    <div>Capacity of the room</div>
                    <input type="number" placeholder="ex : Single room" value={capacity} onChange={(ev) => { setCapacity(ev.target.value) }} />
                </div>
                <div className="mt-10">
                    <div>Price of the room</div>
                    <input type="number" placeholder="ex : Single room" value={price} onChange={(ev) => { setPrice(ev.target.value) }} />
                </div>
                <div className="mt-10 flex gap-10">
                    <div>
                        <div>Pets</div>
                        <input type="checkbox" checked={pet} onChange={(ev) => setPet(!pet)} />
                    </div>
                    <div>
                        <div>Breakfast</div>
                        <input type="checkbox" checked={breakfast} onChange={(ev) => setBreakFast(!breakfast)} />
                    </div>
                </div>
                <div className="mt-10">
                    <div>Description</div>
                    <textarea value={description} onChange={(ev) => { setDescription(ev.target.value) }} />
                </div>
                <div className="mt-10">
                    <div>Number of room</div>
                    <input type="number" value={numberOfRoom} onChange={(ev) => setNumberOfRoom(ev.target.value)} />
                </div>
                <div className="mt-10">
                    <div>Extra information</div>
                    <div className="flex">
                        <div className="flex w-5/12">
                            <input type="text" value={text} onChange={(ev) => setText(ev.target.value)} className="flex w-96" />
                        </div>
                        <button
                            className="flex justify-center items-center px-5 m-2 rounded-xl bg-blue-500"
                            onClick={
                                addTextInExtraInformation
                            }
                        > Add</button>
                    </div>
                </div>
                <div className="mt-10">
                    <div>Add the image</div>
                    <div className="flex">
                        <div className="w-5/12">
                            <input type="text" value={textImage} onChange={(ev) => setTextImage(ev.target.value)} />
                        </div>
                        <button
                            className="flex justify-center items-center px-5 m-2 rounded-xl bg-blue-500"
                            onClick={addImageLink}
                        >Add</button>
                    </div>
                    <div className="flex flex-wrap gap-10 my-10">
                        {images.length > 0 && images.map(item => (
                            < div className="">
                                <img src={item} alt="" className="h-52 w-52 object-fill" />
                            </div >
                        ))}
                    </div>
                </div>
                <div className="mt-10">
                    <button className="bg-red-500 px-5 py-2" onClick={createNewRoomByHotel}>
                        Add room
                    </button>
                </div>
            </div>
        </div >
    )
}


export default AddTheNewRoomByHotel;