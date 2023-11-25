
// ==========================================================================================================================================================================================

import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const RoomContext = createContext({});
export function RoomsContextProvider({ children }) {
    const [state, setState] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        //
        type: "all",
        capacity: 1,
        price: 400,
        minPrice: 0,
        maxPrice: 500,
        minSize: 0,
        maxSize: 10000,
        breakfast: false,
        pets: false
    });

    useEffect(() => {
        filterRooms();
    }, [state.type, state.type, state.capacity, state.price, state.price, state.breakfast, state.pets])


    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    }
    const getRoom = (slug) => {
        let tempRooms = [...state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };
    const filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = state;
        let tempRooms = [...rooms];
        // transform values
        // get capacity
        capacity = parseInt(capacity);
        price = parseInt(price);
        // filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);
        //filter by size
        tempRooms = tempRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
        );
        //filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        //filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        setState(
            {
                ...state,
                sortedRooms: tempRooms
            }
        );
    };
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setState(
            {
                ...state,
                [name]: value,
            }
        );

        //console.log(state)

    };

    const [rooms, setRooms] = useState(null)
    const [ready, setReady] = useState(false);
    useEffect(() => {
        if (!rooms) {
            axios.get('/rooms', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            },).then(({ data }) => {
                const ROOMS = formatData(data);
                setRooms(ROOMS)
                setReady(true)
                setState({
                    ...state,
                    rooms: ROOMS,
                    sortedRooms: ROOMS,
                })
            })
        }
    }, [])
    return (
        <RoomContext.Provider value={{ rooms, setRooms, ready, setReady, context: { ...state, handleChange, getRoom } }}>
            {children}
        </RoomContext.Provider>
    )
}
