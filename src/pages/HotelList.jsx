




import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Header from "../Header";
import useFetch from "../hooks/useFetch";
import SearchItem from "../components/SearchItem";
import Footer from "../components/Footer";


const HotelList = () => {
    const location = useLocation();

    // const currentDate = new Date();

    // // Get the date components
    // const month = currentDate.getMonth() + 1; // Months are zero-indexed
    // const day = currentDate.getDate();
    // const year = currentDate.getFullYear();

    // // Format the date as "MM/dd/yyyy"
    // const formattedDate = `${month}/${day}/${year}`;

    location.state = {
        destination: "madrid",
        dates: [
            {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection'
            }
        ],
        options: {
            adult: 1,
            children: 0,
            room: 1,
        }
    }

    const [destination, setDestination] = useState(location?.state?.destination);
    const [dates, setDates] = useState(location?.state?.dates);

    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location?.state?.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(
        `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
        // `/hotels`
    );
    console.log("🚀 ~ file: HotelList.jsx:54 ~ HotelList ~ data:", data)

    const handleClick = () => {
        console.log(destination, min, max)
        reFetch();
    };

    return (
        <div>
            <div className="m-5">
                <Header />
            </div>
            {/* <Header type="list" /> */}
            <div className="listContainer">
                <div className="flex">
                    <div className="bg-amber-200 shadow-2xl ml-40 rounded-2xl p-4">
                        <h1 className="text-2xl font-bold">Search</h1>
                        <div className="lsItem">
                            <label className="font-bold">Destination</label>
                            <input placeholder={destination} type="text" className="shadow-2xl" onChange={(e) => setDestination(e.target.value)} />
                        </div>
                        <div className="grid">
                            <label className="font-bold mb-2 mt-2">Check-in Date</label>
                            <span
                                className="bg-white shadow-2xl flex justify-center items-center h-10 rounded-2xl"
                                onClick={() => setOpenDate(!openDate)}>{`${format(
                                    dates[0]?.startDate,
                                    "MM/dd/yyyy"
                                )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDates([item.selection])}
                                    minDate={new Date()}
                                    ranges={dates}
                                    className="absolute mt-24"
                                />
                            )}
                        </div>
                        <div className="">
                            <label className="font-bold">Options</label>
                            <div className="pl-4">
                                <div className="flex mt-2 mb-2 items-center justify-between">
                                    <span className="">
                                        Min price <small>per night</small>
                                    </span>
                                    <div className="h-10 w-24">
                                        <input
                                            type="text"
                                            onChange={(e) => setMin(e.target.value)}
                                            className=""
                                        />
                                    </div>
                                </div>
                                <div className="flex mt-2 mb-2 items-center justify-between">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <div className="h-10 w-24">
                                        <input
                                            type="number"
                                            onChange={(e) => setMax(e.target.value)}
                                            className="lsOptionInput"
                                        />
                                    </div>
                                </div>
                                <div className="flex mt-2 mb-2 items-center justify-between">
                                    <span className="lsOptionText">Adult</span>
                                    <div className="h-10 w-24">
                                        <input
                                            type="number"
                                            min={1}
                                            className="lsOptionInput"
                                            placeholder={options.adult}
                                        />
                                    </div>
                                </div>
                                <div className="flex mt-2 mb-2 items-center justify-between">
                                    <span className="lsOptionText">Children</span>
                                    <div className="h-10 w-24">
                                        <input
                                            type="number"
                                            min={0}
                                            className="lsOptionInput"
                                            placeholder={options.children}
                                        />
                                    </div>
                                </div>
                                <div className="flex mt-2 mb-2 items-center justify-between">
                                    <span className="lsOptionText">Room</span>
                                    <div className="h-10 w-24">
                                        <input
                                            type="number"
                                            min={1}
                                            className=""
                                            placeholder={options.room}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleClick}
                            className="w-full bg-cyan-400 h-10 rounded-3xl"
                        >
                            Search
                        </button>
                    </div>
                    <div className="border border-solid bg-cover ml-10 mr-40 h-48">
                        {loading ? (
                            "loading"
                        ) : (
                            <>
                                {data.map((item) => (
                                    <SearchItem item={item} key={item._id} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HotelList;
