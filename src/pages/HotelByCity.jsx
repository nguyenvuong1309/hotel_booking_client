











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
    console.log("🚀 ~ file: HotelByCity.jsx:35 ~ HotelByCity ~ data:", data)
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
            <div className="flex justify-center">
                <div className=" justify-between
                w-10/12
                max-[500px]:grid+justify-center+items-center

                min-[1160px]:flex
                ">
                    <div className="
                    flex justify-center bg-slate-300
                    border border-black shadow-2xl
                    min-[1160px]:w-4/12
                    max-[1160px]:w-full
                    "
                    >
                        <div className="p-4 w-80 h-96">
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
                    </div>

                    <div className="
                    min-[1160px]:w-7/12
                    max-[1160px]:mt-10
                    ">
                        {loading ? (
                            "loading"
                        ) : (
                            <div className="w-full">
                                {temp.map((item) => (
                                    <Link
                                        to={`/place/${item._id}`}
                                        className="my-2" key={item._id}>
                                        <SearchItem item={item} key={item._id} />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default HotelByCity;
