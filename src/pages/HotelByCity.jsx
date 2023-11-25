











import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Header from "../Header";
import useFetch from "../hooks/useFetch";
import SearchItem from "../components/SearchItem";
import Footer from "../components/Footer";


const HotelByCity = () => {
    const location = useLocation();

    const [destination, setDestination] = useState(location?.state?.destination);
    const [dates, setDates] = useState(location?.state?.dates);

    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location?.state?.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(
        `/hotels/Dalat`
    );
    const [checkboxValues, setCheckboxValues] = useState(0);

    let temp = checkboxValues ? data.filter((item) => item.star === checkboxValues) : data

    const handleClick = () => {
        reFetch();
    };

    return (
        <div>
            <div className="m-5">
                <Header />
            </div>
            {/* <div className="m-10">
                <img src="https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=1920x822" alt="" className="w-screen" />
            </div> */}
            {/* <Header type="list" /> */}
            <div className="listContainer">
                <div className="flex gap-10">
                    <div className="shadow-2xl ml-40  p-4 border border-black w-80 h-96">
                        <div>
                            start rating
                        </div>
                        <div className="flex gap-5">
                            <input type="checkbox" checked={checkboxValues === 5 ? true : false}
                                onChange={() => {
                                    if (checkboxValues !== 5) {
                                        setCheckboxValues(5);
                                    } else {
                                        setCheckboxValues(0);
                                    }
                                }}
                            />
                            <div>5 star</div>
                        </div>
                        <div className="flex gap-5">
                            <input type="checkbox" checked={checkboxValues === 4 ? true : false}
                                onChange={() => {
                                    if (checkboxValues !== 4) {
                                        setCheckboxValues(4);
                                    } else {
                                        setCheckboxValues(0);
                                    }
                                }}
                            />
                            <div>4 star</div>
                        </div>
                        <div className="flex gap-5">
                            <input type="checkbox" checked={checkboxValues === 3 ? true : false}
                                onChange={() => {
                                    if (checkboxValues !== 3) {
                                        setCheckboxValues(3);
                                    } else {
                                        setCheckboxValues(0);
                                    }
                                }}
                            />
                            <div>3 star</div>
                        </div>
                        <div className="flex gap-5" >
                            <input type="checkbox" checked={checkboxValues === 2 ? true : false}
                                onChange={() => {
                                    if (checkboxValues !== 2) {
                                        setCheckboxValues(2);
                                    } else {
                                        setCheckboxValues(0);
                                    }
                                }}
                            />
                            <div>2 star</div>
                        </div>
                        <div className="flex gap-5" >
                            <input type="checkbox" checked={checkboxValues === 1 ? true : false}
                                onChange={() => {
                                    if (checkboxValues !== 1) {
                                        setCheckboxValues(1);
                                    } else {
                                        setCheckboxValues(0);
                                    }
                                }}
                            />
                            <div>1 star</div>
                        </div>
                    </div>
                    <div className="">
                        {loading ? (
                            "loading"
                        ) : (
                            <>
                                {temp.map((item) => (
                                    <Link
                                        to={`/place/${item._id}`}
                                        className="my-2" key={item._id}>
                                        <SearchItem item={item} key={item._id} />
                                    </Link>
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

export default HotelByCity;
