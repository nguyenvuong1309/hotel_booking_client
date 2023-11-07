



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


export default function   SearchBar() {
    const [openDate, setOpenDate] = useState(false);
    const [openOption, setOpenOption] = useState(false);
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

    return (
        <>
            <div className="flex">
                <div className="flex gap-5 headerSearch  items-center  border border-gray-300 rounded-full py-2">
                    <div className="flex gap-2 headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="mt-4 ml-5" />
                        <input type="text"
                            placeholder="Where are you going? "
                            className="headerSearchInput"
                        />
                    </div>
                    <div onClick={() => setOpenDate(!openDate)} className="flex gap-2 headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="mt-1" />
                        <span className="headerSearchText">
                            {`${format(date[0].startDate, 'yyyy-MM-dd')} to ${format(date[0].endDate, 'yyyy-MM-dd')}`}
                        </span>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="absolute mt-11"
                            />
                        )}
                    </div>
                    <div className="flex gap-2 headerSearchItem">
                        <div onClick={() => setOpenOption(!openOption)}>
                            <FontAwesomeIcon icon={faPerson} className="mt-1" />
                            <span className="headerSearchText">{` ${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                        </div>
                        {openOption && (<div className="options absolute mt-11 bg-gray-200 w-40 h-40 rounded-lg">
                            <div className="optionItem flex mt-5 justify-between">
                                <span className="optionText">Adult</span>
                                <div className="flex gap-4">
                                    <button disabled={options.adult <= 1}
                                        className="optionCounterButton  w-5 h-5  rounded-lg"
                                        onClick={() => handleOption("adult", "d")}
                                    >-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton  w-5 h-5  rounded-lg" onClick={() => handleOption("adult", "i")} >+</button>
                                </div>
                            </div>
                            <div className="optionItem mt-5 flex justify-between">
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
                            <div className="optionItem mt-5 flex justify-between">
                                <span className="optionText">Room</span>
                                <div className="flex gap-4">
                                    <button disabled={options.room <= 1}
                                        className="optionCounterButton  w-5 h-5 rounded-lg"
                                        onClick={() => handleOption("room", "d")}
                                    >-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton w-5 h-5  rounded-lg" onClick={() => handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                    <button className="mr-5 rounded-full w-10 h-10">
                        <svg className="h-6 w-6 text-black ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div >
        </>
    );
}