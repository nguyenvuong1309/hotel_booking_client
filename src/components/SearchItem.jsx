import { Link } from "react-router-dom";



const SearchItem = ({ item }) => {
    return (
        <div className="flex items-center border-2 border-black border-solid bg-cover ml-10 mr-40 h-52 rounded-2xl">

            <img src={item.photos[0]} alt="" className="h-40 w-40 items-center m-4" />
            <div className="grid ml-4 ">
                <h1 className=" text-cyan-400 font-bold text-xl">{item.name}</h1>
                <span className="">{item.distance}m from center</span>
                <span className="bg-emerald-600 w-32 rounded-2xl flex items-center justify-center">Free airport taxi</span>
                <span className="font-bold">
                    Studio Apartment with Air conditioning
                </span>
                <span className="">{item.desc}</span>
                <span className="font-bold text-green-500">Free cancellation </span>
                <span className="text-green-500">
                    You can cancel later, so lock in this great price today!
                </span>

            </div>
            <div className="grid m-4">
                {item.rating && <div className="">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="grid">
                    <span className="flex justify-end font-bold text-2xl">${item.cheapestPrice}</span>
                    <span className="flex justify-end py-4">Includes taxes and fees</span>
                    <div className="flex justify-end">
                        <Link to={`/hotels/${item._id}`}>
                            <button className=" bg-cyan-600 flex items-center p-4 rounded-2xl">See availability</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
