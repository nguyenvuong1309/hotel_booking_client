



import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const Featured = () => {
    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=berlin,madrid,london"
    );

    return (
        <div className="flex gap-10 flex-wrap w-11/12 justify-center">
            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <Link to={`/hotels/Dalat`} className="grid relative">
                        <img
                            src="https://ik.imagekit.io/tvlk/blog/2023/01/canh-dep-da-lat-1.jpg?tr=dpr-2,w-675"
                            alt=""
                            className="w-96 h-60 rounded-2xl"
                        />
                        <div className="absolute text-white font-bold bottom-5 left-5 text-xl">
                            <h1 className="text-white">Da Lat</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </Link>

                    <Link to={`/hotels/Baoloc`} className="grid relative">
                        <img
                            src="https://khoanhkhacvietnam.vn/wp-content/uploads/2020/03/chua-linh-quy-phap-an-1-1200x675.jpg"
                            alt=""
                            className="w-96 h-60 rounded-2xl"
                        />
                        <div className="absolute text-white bottom-5 left-5 font-bold text-xl">
                            <h1>Bao Loc</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </Link>
                    <Link to={`/hotels/Komtum`} className="grid relative">
                        <img
                            src="https://s3-hn-2.cloud.cmctelecom.vn/tapchicongthuong.vn/tcct-media/20/8/27/nha_tho_go_3.jpg"
                            alt=""
                            className="w-96 h-60 rounded-2xl"
                        />
                        <div className="absolute text-white bottom-5 left-5 font-bold text-xl">
                            <h1>KomTum</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Featured;
