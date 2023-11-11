

import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import Selector from "./Selector";


export default function SearchBar() {


    const [openDate, setOpenDate] = useState(false);
    const [openOption, setOpenOption] = useState(false);
    const [placeFrom, setPlaceFrom] = useState("");

    const [placeTo, setPlaceTo] = useState("");

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSwitchPlace = (ev) => {
        ev.preventDefault();
        let from = placeFrom;
        let to = placeTo;
        setPlaceFrom(to);
        setPlaceTo(from);
    }

    return (
        <>
            <div className="flex mb-10 gap-3">
                <div className="flex">
                    <div className="bg-white h-10 rounded-l-lg">
                        <Selector selected={placeFrom} setSelected={setPlaceFrom} />
                    </div>
                    <div className="bg-white h-10" onClick={handleSwitchPlace}>
                        <svg className=" rotate-90 h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M3 9l4-4l4 4m-4 -4v14" />
                            <path d="M21 15l-4 4l-4-4m4 4v-14" />
                        </svg>
                    </div>
                    <div className="bg-white h-10 rounded-r-lg">
                        <Selector selected={placeTo} setSelected={setPlaceTo} />
                    </div>

                    {/* <div className="grid">
                        <div className="flex">  
                            <div className="">
                                <Selector />
                            </div>
                            <div>
                                <svg className=" rotate-90 h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M3 9l4-4l4 4m-4 -4v14" />
                                    <path d="M21 15l-4 4l-4-4m4 4v-14" />
                                </svg>
                            </div>
                        </div>
                    </div> */}


                    {/* <div className="border-l-4 border-solid border-black grid">
                        <div className="flex">
                            <input placeholder="Ho Chi Minh" />
                        </div>
                        <div className="absolute">
                        </div>
                    </div> */}


                </div >
                <div onClick={() => setOpenDate(!openDate)} className="grid">
                    <div className="flex gap-2  bg-white items-center rounded-lg h-10">
                        <FontAwesomeIcon icon={faCalendarDays} className="ml-3" />
                        <span className="mr-3">
                            {`${format(date[0].startDate, 'yyyy-MM-dd')} to ${format(date[0].endDate, 'yyyy-MM-dd')}`}
                        </span>
                    </div>
                    {openDate && (
                        <div className="mt-11 absolute shadow-2xl">
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className=""
                            />
                        </div>
                    )}
                </div>

                <div className="grid gap-y-1">
                    <div onClick={() => setOpenOption(!openOption)} className="flex gap-2 bg-white items-center rounded-lg h-10">
                        <FontAwesomeIcon icon={faPerson} className="ml-3" />
                        <span className="mr-3">{` ${options.adult} passengers`}</span>
                    </div>
                    {openOption && (
                        <div className="absolute mt-12 bg-white shadow-2xl w-40 h-20 rounded-lg flex">
                            <div className="flex items-center justify-around w-full">
                                <span className="mr-1">Adult</span>
                                <div className="flex gap-3">
                                    <button disabled={options.adult <= 1}
                                        className="w-5 h-5  rounded-lg"
                                        onClick={() => handleOption("adult", "d")}
                                    >-</button>
                                    <span className="">{options.adult}</span>
                                    <button className="w-5 h-5 rounded-lg" onClick={() => handleOption("adult", "i")} >+</button>
                                </div>
                            </div>
                            {/* <div className="optionItem mt-5 flex justify-between">
                        <span className="optionText">Children</span>
                        <div className="flex gap-4">
                            <button disabled={options.children <= 1}
                                className="optionCounterButton w-5 h-5 rounded-lg"
                                onClick={() => handleOption("children", "d")}
                            >-</button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button className="optionCounterButton w-5 h-5 rounded-lg" onClick={() => handleOption("children", "i")}>+</button>
                        </div>
                    </div>
                    <d className="optionItem mt-5 flex justify-between">
                        <span className="optionText">Room</span>
                        <div className="flex gap-4">
                            <button disabled={options.room <= 1}
                                className="optionCounterButton  w-5 h-5 rounded-lg"
                                onClick={() => handleOption("room", "d")}
                            >-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterButton w-5 h-5  rounded-lg" onClick={() => handleOption("room", "i")}>+</button>
                        </div>
                    </d iv> */}
                        </div>
                    )}
                </div>

                <button className="flex mr-5 w-30 h-10 justify-center items-center bg-sky-400 rounded-lg">
                    <svg className="h-8 w-8 text-black ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <div className="mr-3">
                        Find tickets
                    </div>
                </button>
            </div >

        </>
    )
}