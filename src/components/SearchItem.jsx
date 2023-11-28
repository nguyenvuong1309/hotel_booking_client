import { Link } from "react-router-dom";



const SearchItem = ({ item }) => {
    return (
        <div className="flex items-center border border-solid bg-cover w-full mb-10 shadow-slate-950 bg-slate-300
        max-[500px]:grid
        ">

            <div className=" flex items-center p-1 justify-center
            max-[500px]:w-full
            ">
                <img src={item.photos[0]} alt="" className="flex items-center justify-center object-cover  w-[900px] h-[180px] " />
            </div>

            <div className="grid ml-4 ">
                <h1 className=" text-cyan-400 font-bold text-xl">{item.name}</h1>
                <span className="">{item.distance} m from center</span>
                <span className="bg-emerald-600 w-32 rounded-2xl flex items-center justify-center">Free airport taxi</span>
                <span className="font-bold">
                    Studio Apartment with {item.aircondition === true ? "Air conditioning" : "no Air conditioning"}
                </span>
                <span className="">{item.desc}</span>
                <div>
                    {
                        item.freecancellation === true ? (
                            <>
                                <span className="font-bold text-green-500">Free cancellation </span>
                                <span className="text-green-500">
                                    You can cancel later, so lock in this great price today!
                                </span>
                            </>
                        ) : (
                            <div>
                                No free cancellation
                            </div>
                        )
                    }
                </div>

            </div>

            <div className="grid m-4">
                {item.rating && <div className="">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="grid">
                    <span className="flex justify-end font-bold text-2xl">${item.price}</span>
                    <span className="flex justify-end py-4">Includes taxes and fees</span>
                    <div className="flex justify-end">
                        <Link to={`/hotels/${item._id}`}>
                            <button className=" bg-cyan-600 flex items-center p-4 rounded-2xl">See availability</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default SearchItem;
